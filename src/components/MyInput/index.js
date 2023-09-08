import React from "react";
import { View } from "react-native";
import { Input } from "./style";

export default function MyInput(props) {
  return (
    <View>
      <Input
        placeholder={props.myPlaceholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}