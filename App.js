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
        elevation: 20, // -- android only
        shadowColor: 'grey', // -- iOS only
        shadowRadius: 10, // -- iOS only
        shadowOpacity: 1, // -- iOS only
        backgroundColor: 'dodgerblue',
        shadowOffset: {width: 10, height: 10}, // -- iOS only
      }}/>
    </View>
  );
}

