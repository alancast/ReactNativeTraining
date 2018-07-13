import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Tts from "react-native-tts";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextToSpeech placeholder="Enter text to speak" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    padding: 20,
    color: "white"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

class TextToSpeech extends Component {
  constructor(props) {
    super(props);
    this._speak = this._speak.bind(this);
    this.state = { text: "" };
  }

  _speak() {
    Tts.getInitStatus().then(() => {
      Tts.speak(this.state.text);
    });
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <TextInput
          style={{ height: 40 }}
          placeholder={this.props.placeholder}
          onChangeText={text => this.setState({ text })}
        />
        <TouchableOpacity onPress={this._speak}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Speak text!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
