import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Button, ButtonTitle } from "./style";

export default function MyButton(props) {
  return (
    <View>
      <Button onPress={props.onPress}>
        <ButtonTitle>{props.title}</ButtonTitle>
      </Button>
    </View>
  )
}