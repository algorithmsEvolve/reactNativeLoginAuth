import React, { Component } from "react";
import { View, Text, Image } from "react-native";

//config
import { styles } from "../config/styles";

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Image
          source={{ uri: "https://uilogos.co/img/logotype/circle.png" }}
          style={styles.Logo}
        />
      </View>
    );
  }
}
