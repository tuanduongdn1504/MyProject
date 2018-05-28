import React, { Component } from "react";
import {
  Text,
  View,
} from "react-native";

const Answer = ({ onPress, isSelected, data }) => {
  const { text } = data;
  return (
    <View
      style={[
        { alignItems: "center", },
        isSelected && { backgroundColor: '#ddd111' }
      ]}>
      <Text onPress={() => onPress(data)}>
        {text}
      </Text>
    </View>
  )
};

export default Answer;