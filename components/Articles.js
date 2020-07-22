import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

//config
import { styles } from "../config/styles";
import firebase from "firebase";

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerArticles}>
        <View style={styles.articleContainer}>
          <Text style={styles.heading}>Welcome to the authorized screen</Text>
          <Text style={styles.content}>You are logged in from firebase</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => firebase.auth().signOut()}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
