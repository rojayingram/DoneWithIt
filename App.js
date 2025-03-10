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
        borderWidth: 10,
        borderRadius: 50,
        borderColor: 'royalblue',
        backgroundColor: 'dodgerblue',
      }}/>
    </View>
  );
}

