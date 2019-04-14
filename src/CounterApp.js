import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class CounterApp extends React.Component {
  state = {
    counter: 0
  };
  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity onPress={() => this.increaseCounter()}>
            <Text style={{ fontSize: 20 }}>Increase</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.decreaseCounter()}>
            <Text style={{ fontSize: 20 }}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

// This getting state.counter from the store and mapping it to prop called from this class.
export default CounterApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
