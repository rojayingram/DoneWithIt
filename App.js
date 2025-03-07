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
        width: 100,
        height: 100,
        }}/>

      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,

        // position
        top: 20,
        // bottom: 20,
        left: 20,
        // right:20,
        position: "absolute", // absolute , static , relative
        }}/>

      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100}}/>
    </View>
  );
}
