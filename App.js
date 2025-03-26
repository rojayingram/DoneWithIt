import React from 'react';
import { View, Text } from 'react-native';

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


export default function App() {
  return (
    <Screen>
      
      <PageHeading
      pageTile="ListItem Component"
      pageSubTitle="12- Extending the ListItem Component"
      />

      <ListItem
      title="My title"
      subTitle="My subtitle"
      />

      <ListItem
      image={ require('./app/assets/rojay.png') }
      title="My title"
      subTitle="My subtitle"
      />

      <ListItem
      title="My title"
      subTitle="My subtitle"
      IconComponent={ <Icon name="email" /> }
      />

      <ListItem
      title="My title"
      // subTitle="My subtitle"
      IconComponent={ <Icon name="email" /> }
      />
      
    </Screen>
  );
}