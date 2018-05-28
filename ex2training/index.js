/**
 * How to use "props"
 */
import React, { Component } from "react";
import {
  Stylesheet,
  Text,
  Button,
  View,
} from "react-native";
import Answer from "./answer"

const DATA = {
  "key": "question0",
  "question": "Công ty thành lập vào năm nào?",
  "answers": [
    {
      "key": "answer0",
      "text": "8/2010",
      "isCorrect": false
    },
    {
      "key": "answer1",
      "text": "8/2011",
      "isCorrect": true
    },
    {
      "key": "answer2",
      "text": "4/2012",
      "isCorrect": false
    },
    {
      "key": "answer3",
      "text": "5/2013",
      "isCorrect": false
    }
  ]
};

export default class App extends Component {
  state = {
    selected: null,
  };

  onPressAnswer = data => {
    this.setState({ selected: data });
  }
  onSubmit = (e) => {
    const { selected } = this.state;
    if (selected) {
      this.setState({ showResult: selected.isCorrect ? 'Congratulation' : 'incorrect' });
      return;
    }
    this.setState({ showResult: 'Choosing your answer!' })
  }

  render() {
    const { selected } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          {DATA.question}
        </Text>
        {DATA.answers.map(data =>
          <Answer
            onPress={this.onPressAnswer}
            key={data.key}
            data={data}
            isSelected={selected.key === data.key}
          />
        )}
        <Button title="Submit" onPress={this.onSubmit} />
        <Text>{this.state.showResult}</Text>
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