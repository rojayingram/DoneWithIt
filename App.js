import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  View,
} from 'react-native';




export default function App() {
  return (
    <View
    style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        // flexBasis: 100, // width or height
        // flexGrow: 1, // === flex: 1
        // flexShrink: 1, // === flex: -1
        width: 100,
        height: 100}}/>

      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100}}/>

      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100}}/>
    </View>
  );
}
