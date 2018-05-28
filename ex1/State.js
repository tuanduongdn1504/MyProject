import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showText: " ", answer: "8/201" };
  }
  onChangeText = e => {
    //console.log('this.answer',this.answer._lastNativeText)
    //var answer=this.answer._lastNativeText

    // console.log("this.answer", this.state.answer);
    var answer = this.state.answer;
     if (answer === "8/2011") {
       this.setState({ showText: "Congratulation!" });
     } else {
       this.setState({ showText: "Incorrect" });
     }

  };
  componentDidUpdate() {
    {
      console.log("this.show", this.state.showText);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>'When is the company established?'</Text>
          <TextInput
            placeholder="Answer here:"
            id="answer"
            value="8/2011"
            //ref={(el) => {this.answer = el;}}>
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <View>
          <Button title="submit" onPress={this.onChangeText} />
          <Text>{this.state.showText}</Text>
        </View>
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
