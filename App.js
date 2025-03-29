import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import PageHeading from './app/components/PageHeading';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';



export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <Text>{firstName}</Text>

      <TextInput 
        maxLength={4}
        secureTextEntry
        keyboardType="numeric"
        clearButtonMode="always" //iOS only
        onChangeText={(text)=> setFirstName(text)}
        placeholder="First Name"
        style={
          {
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }
        }
        />
      </Screen>
  );
}