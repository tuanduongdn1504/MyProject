import React,{Component} from "react";
import {Stylesheet, Text, TextInput, TouchableOpacity, Button, View} from "react-native"

class Answer extends Component {
    componentDidUpdate(){
        //{console.log("this.press2",this.state.backgroundAnswer)}
      }  
    onPressChange= () =>{
        this.props.onPress()
        if ( this.props) {
            this.setState({backgroundAnswer: "#ddd1"})
      }

    }
    render(){
        let display = this.props.answer
        return(
            <View style={[{alignItems: "center", }, this.props.isSelected && {backgroundColor: '#ddd111'}]}>
            <Text onPress={this.onPressChange}>{`
${display}
`}</Text>
            </View>
        )
    }
}
export default Answer