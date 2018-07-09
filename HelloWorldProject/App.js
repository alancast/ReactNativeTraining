import React, { Component } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default class HelloWorldApp extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.yellowContainer}>
          <Text style={{ marginTop: 50 }}>Hello world!</Text>
          <Bananas />
          <Greeting name="Jessalyn" />
          <Greeting name="Alex" />
          <Greeting name="Mike" />
          <Blink text="I love to blink" />
          <PizzaTranslator />
        </View>
        <ScrollView contentContainerStyle={{ flex: 1 }} maximumZoomScale={2.0}>
          <View style={styles.blueContainer}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Hello world!
            </Text>
            <ButtonBasics
              title="Press Me Basic Button"
              color="#841584"
              backgroundColor="white"
            />
            <TouchableButton
              styles={touchableStyles}
              title="Press Me Touchable Button"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blueContainer: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },
  yellowContainer: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

const touchableStyles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});

class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return <Image source={pic} style={{ width: 193, height: 110 }} />;
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : " ";
    return <Text>{display}</Text>;
  }
}

class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    return (
      <View style={{ backgroundColor: this.props.backgroundColor }}>
        <Button
          onPress={this._onPressButton}
          title={this.props.title}
          color={this.props.color}
        />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return <Text>Hello {this.props.name}!</Text>;
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate words into pizza!"
          onChangeText={text => this.setState({ text })}
          backgroundColor="white"
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

class TouchableButton extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <View style={this.props.styles.button}>
          <Text style={this.props.styles.buttonText}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
