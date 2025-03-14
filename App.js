import React from 'react';
import { Text, View } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';

export default function App() {
  return (
    <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
    <AppText>
      I love React Native! This is my first React native app! Here's some more text.
    </AppText>
    </View>
  );
}