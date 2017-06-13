import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import ToolbarComponent from './src/ToolbarComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  toolbar: {
    backgroundColor: 'red',
  },
});

export default class ToolbarDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ToolbarComponent
          foreground="light"
          style={styles.toolbar}
          title="Title"
          leftItem={{
            title: 'Left',
            icon: require('./img/x-white.png'),
            layout: 'title',
            onPress: () => {
              console.log('pressed');
            },
          }}
          rightItem={{
            title: 'Right',
            layout: 'title',
            onPress: () => {
              console.log('pressed');
            },
          }}
        />
      </View>
    );
  }
}
