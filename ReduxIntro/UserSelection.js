import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class UserSelection extends Component {
  constructor(props) {
    super(props);
    this._findRepos = this._findRepos.bind(this);
    this.state = { text: "" };
  }
  static navigationOptions = {
    title: "User Selection"
  };

  _findRepos() {
    this.props.navigation.navigate("Repos", { username: this.state.text });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter the github username you want to search"
          onChangeText={text => this.setState({ text })}
          backgroundColor="white"
        />
        <TouchableOpacity onPress={this._findRepos}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit Username</Text>
          </View>
        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center"
  },
});
