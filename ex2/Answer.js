import React, { Component } from "react";
import {
  Stylesheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from "react-native";

class Answer extends Component {
  componentDidUpdate() {
    //{console.log("this.press2",this.state.backgroundAnswer)}
  }
  onPressChange = () => {
    this.props.onPress();
    if (this.props) {
      this.setState({ backgroundAnswer: "#ddd1" });
    }
  };
  render() {
    const {answer} = this.props;
    return (
      <View
        style={[
          { alignItems: "center" },
          this.props.isSelected && { backgroundColor: "#ddd111" }
        ]}
      >
        <Text onPress={this.onPressChange}>
        {this.props.answer}</Text>
      </View>
    );
  }
}
export default Answer;
