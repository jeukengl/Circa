import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
// replace `__SIMPLE_API_ENDPOINT__` with the endpoint from the previous step
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjl9yvvrk0arh0150xkmzten6' })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
