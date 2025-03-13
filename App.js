import React from 'react';
import { Text, View } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
 

export default function App() {
  return (
    <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
    <Text
    style={{
      fontSize: 30,
      lineHeight: 30,
      color: "tomato",
      fontWeight: "bold",
      fontStyle: "italic",
      textAlign: "center",
      fontFamily: "roboto", // {"courier" = iOS & android} {"roboto" = android}
      textTransform: "capitalize",
      textDecorationLine: "underline",
    }}>
      I love React Native! This is my first React native app! Here's some more text.
    </Text>
    </View>
  );
}