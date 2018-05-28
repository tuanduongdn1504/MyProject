/**
 * How to use "state"
 */

import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";

const DATA = {
  question: 'When is the company established?',
  answer: '8/2011'
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      showText: '',
    };
  }

  onChangeText = answer => {
    this.setState({ answer });
  }

  onSubmit = () => {
    //console.log('this.answer',this.answer._lastNativeText);
    //const answer=this.answer._lastNativeText;
    const { answer } = this.state;
    this.setState({ showText: answer === DATA.answer ? 'Congratulation!' : "Incorrect" });
  }

  renderInput = () => {
    return (
      <TextInput
        //ref={(el) => {this.answer = el;}}
        placeholder="Answer here:"
        onChangeText={this.onChangeText}
        value={this.state.answer}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{DATA.question}</Text>
        {this.renderInput()}
        <Button title="submit" onPress={this.onSubmit} />
        <Text>{this.state.showText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});