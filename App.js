import React from 'react';
import { View } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
 

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        width: 100,
        height: 100,
        padding: 20,
        paddingLeft: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "dodgerblue",
      }}>
        <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}
        />
      </View>
      <View
      style={{
        width: 100,
        margin: 20,
        height: 100,
        backgroundColor: "tomato",
      }}/>
    </View>
  );
}

