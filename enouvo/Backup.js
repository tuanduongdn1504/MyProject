// EX1: State
import React from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from "react-native";
//import MyButton from "./MyButton";

export default class App extends React.Component {
    componentDidMount(){}
    constructor(){
      super()
      this.state = {showText: ""}
    }
    onChangeText = (e) => {
      console.log('this.answer',this.answer._lastNativeText)
      var answer=this.answer._lastNativeText
      if(answer === "8/2011"){
        this.setState({showText : 'Congratulation!'})
      }
      else {
        this.setState({showText: "Incorrect"})
      }  
      console.log('this.show',this.state.showText)
    }
    render() {
      return (
      <View style={styles.container}>
        <View>
          <Text>'When is the company established?'</Text>
          <TextInput placeholder="Answer here:" id="answer" value="8/201" 
            ref={(el) => {this.answer = el;}}>
            {/* onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}> */}
          </TextInput>
        </View>
        <View>
          <Button title="submit" onPress={this.onChangeText}></Button>
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



//----------------------------------------------------------------


// Form login>>> https://github.com/facebook/react-native/issues/511
import React from "react"
import { AppRegistry, View, Text, TextInput, Button  } from "react-native"

export default class Login extends React.Component {
    componentDidMount(){}
    constructor(props){
              super(props)
    state = {
        username: 'demo',
        password: 'demo'
    }
        }

    render(){
        return(
            <View>

    <Text style={Style.label} value="User Name" />
    <TextInput
        style={Style.input}
        placeholder="UserName"
        onChangeText={(value) => this.setState({username: value})}
        value={this.state.username}
        /*value={this.state.username}
          onChangeText={username => this.setState({username})}
          onSubmitEditing={this.refs.passwordInput.focus}*/
    />

    <Text style={Style.label}>Password</Text>
    <TextInput
        style={Style.input}
        placeholder="Password"
        onChangeText={(value) => this.setState({password: value})}
        value={this.state.password}
        /*ref={ref => (this.passwordInput = ref)}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          onSubmitEditing={this._submitForm}*/
    />

    <Button
        title="LOGIN"
        onPress={() => 
            {
                if(this.state.username.localeCompare('demo')!=0){
                    ToastAndroid.show('Invalid UserName',ToastAndroid.SHORT);
                    return;
                }
                if(this.state.password.localeCompare('demo')!=0){
                    ToastAndroid.show('Invalid Password',ToastAndroid.SHORT);
                    return;
                }
                //Handle LOGIN
            }
        }
    />
    {/* <TouchableHighlight onPress={this._submitForm}>
          <Text>Submit</Text>
        </TouchableHighlight> */}
            </View>
        )
    }
    /*_submitForm = () => {
      const { username, password } = this.state
  
      // do some stuff here…
    };*/
}
//-----------------------------------------------------------------


//form Check
class Check extends React.Component {
  constructor(props){
    super(props);
    this.state ={showText: true};
      setInterval(() => {
        this.setState({ showText: !this.state.showText });
      }, 1000);
  }

  render() {
    let display = this.state.showText ? "Congratulation!" : "Incorrect" ;
    return (
      <TextInput>{display}</TextInput>
    )
  }
}
//-----------------------------------------------------------------


//
import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
//-----------------------------------------------------------------


//
import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
//-------------------------------------------------------------------