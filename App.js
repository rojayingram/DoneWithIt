import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {Dimensions, Platform, StyleSheet, SafeAreaView,   StatusBar , View  } from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:"dodgerblue",
        width: '50%',
        height: 70,
      }}></View>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    justifyContent: 'center'
  },
});
