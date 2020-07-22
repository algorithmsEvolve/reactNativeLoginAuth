import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

//config
import { styles } from "../config/styles";
export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
