import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

import reducer from "./reducer";
import RepoDetail from "./RepoDetail";
import RepoList from "./RepoList";
import Profile from "./Profile";
import UserSelection from "./UserSelection";

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const client = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json"
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client), logger));

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});

const Tabs = createBottomTabNavigator({
  RepoList: {
    screen: RepoList
  },
  Profile: {
    screen: Profile
  }
});

const Stack = createStackNavigator({
  Home: {
    screen: UserSelection
  },
  Repos: {
    screen: Tabs
  },
  Detail: {
    screen: RepoDetail
  }
});
