import React, { Component } from "react";
import { View, Text } from "react-native";

import Logo from "./Logo";
import EmailAndPassword from "./EmailAndPassword";

//config
import { styles } from "../config/styles";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.emailAndPassword}>
          <EmailAndPassword />
        </View>
      </View>
    );
  }
}
