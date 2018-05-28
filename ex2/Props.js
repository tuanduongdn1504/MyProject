import React, { Component } from "react";
import {
  AppRegistry,
  Stylesheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from "react-native";
import Answer from "./Answer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      isCorrect: ""
    };
  }
  onSubmit = e => {
    var checkAnswer = this.state.isCorrect;
    console.log("this.answer", checkAnswer);
    if (checkAnswer === "true") {
      this.setState({ showResult: "Congratulation" });
    } else {
      this.setState({ showResult: "Incorrect!" });
    }
    this.setState({ selected: "Choosing your answer!" });
  };
  componentDidUpdate() {}
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#ddd"
        }}
      >
        <View>
          <Text key="question0">"When was the company established?"</Text>
          <Answer
            onPress={() =>
              this.setState({ selected: "answer0", isCorrect: "false" })
            }
            key="answer0"
            answer="8/2010"
            isSelected={this.state.selected === "answer0"}
          />
          <Answer
            onPress={() =>
              this.setState({ selected: "answer1", isCorrect: "true" })
            }
            key="answer1"
            answer="8/2011"
            isSelected={this.state.selected === "answer1"}
          />
          <Answer
            onPress={() =>
              this.setState({ selected: "answer2", isCorrect: "false" })
            }
            key="answer2"
            answer="4/2012"
            isSelected={this.state.selected === "answer2"}
          />
          <Answer
            onPress={() =>
              this.setState({ selected: "answer3", isCorrect: "false" })
            }
            key="answer3"
            answer="5/2013"
            isSelected={this.state.selected === "answer3"}
          />
        </View>
        <View>
          <Button title="Submit" onPress={this.onSubmit} />
          <Text>{this.state.showResult}</Text>
        </View>
      </View>
    );
  }
}
//AppRegistry.registerComponent('MyProject', () => App);
