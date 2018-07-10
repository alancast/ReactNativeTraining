import React, { Component } from "react";
import { Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { listRepos } from "./reducer";

class RepoList extends Component {
  static navigationOptions = {
    title: "RepoList"
  };
  componentDidMount() {
    const { username } = this.props.navigation.state.params;
    this.props.listRepos(username);
  }
  navigateToDetail(name) {
    const { username } = this.props.navigation.state.params;
    this.props.navigation.navigate("Detail", {
      username: username,
      name: name
    });
  }
  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.navigateToDetail(item.name)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({
    key: repo.id.toString(),
    ...repo
  }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
