import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

//config
import { styles } from "../config/styles";
import firebase from "firebase";

export default class EmailAndPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
    };
  }

  loginPressed = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  onLoginSuccess = () => {
    this.setState({
      error: "",
      loading: false,
    });
  };

  render() {
    return (
      <View style={styles.container_EAP}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={this.state.password}
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={styles.btn} onPress={this.loginPressed}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{this.state.error}</Text>
      </View>
    );
  }
}
