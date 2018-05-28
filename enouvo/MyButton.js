import React from "react";
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default class MyButton extends React.Component{
    constructor(props){
        super(props);
        /*this.state ={showText: true};
          setInterval(() => {
            this.setState({ showText: !this.state.showText });
          }, 1000);*/
        this.state = {text: '8/2011'}  
      }
    
      render() {
        var buttonSwitch = this.state.showText ? "Congratulation!" : "Incorrect";
        return (
            <View>
                <Text>Click the button!</Text>
                <TouchableOpacity onPress={this.handleClick}>
                <Text>{buttonSwitch}</Text>
                </TouchableOpacity>
            </View>
        )
      }
    }
    //AppRegistry.registerComponent('MyButton', () => MyButton)





    /*import React from "react";
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class MyButton extends React.Component{
    render(){
        return(
            <TouchableOpacity>onPress=() => console.log('Pressed!')
            <View>
            <Text>{this.props.customText || 'Submit'}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}*/

/*MyButton.propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func.isRequired
};*/