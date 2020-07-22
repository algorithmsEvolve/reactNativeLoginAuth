import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import LoginForm from "./components/LoginForm";
import Articles from "./components/Articles";
import BG from "./images/bg.jpeg";
import Loading from "./components/Loading";

//config
import { styles } from "./config/styles";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyCXKJnlTqV2VHXccz0FZ4AlDrm8qsUAH8U",
      authDomain: "codenestadb.firebaseapp.com",
      databaseURL: "https://codenestadb.firebaseio.com",
      projectId: "codenestadb",
      storageBucket: "codenestadb.appspot.com",
      messagingSenderId: "840774146490",
      appId: "1:840774146490:web:f59f7b66c27b5077362583",
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return (
          <ImageBackground style={styles.BGContainer} source={BG}>
            <LoginForm />
          </ImageBackground>
        );
      case true:
        return <Articles />;
      default:
        return <Loading />;
    }
  };

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

export default App;
