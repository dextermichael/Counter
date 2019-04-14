import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CounterApp from "./src/CounterApp";
import { createStore } from "redux";
import { Provider } from "react-redux";

/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can mofified using actions - SIMPLE OBJECTS
 * Dispactcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - recieves the action and modifes the state to give us a new state
 * -pure funtion
 * -only mandotory/arugment is the 'type;
 * Subscriber -listens for state change to update the ui (using connect)
 */
const initalState = {
  counter: 0
};

const reducer = (state = initalState) => {};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
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
