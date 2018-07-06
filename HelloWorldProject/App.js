import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.yellowContainer}>
          <Text style={{marginTop: 50}}>Hello world!</Text>
          <Bananas/>
          <Greeting name='Jessalyn' />
          <Greeting name='Alex' />
          <Greeting name='Mike' />
          <Blink text='I love to blink' />
          <PizzaTranslator/>
        </View>
        <View style={styles.blueContainer}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Hello world!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blueContainer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  yellowContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          backgroundColor='white'
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
