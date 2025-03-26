import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import AppText from './AppText';


function PageHeading({pageTile, pageSubTitle,}) {
    return (
      <>
      {/* page title */}
      <View style={styles.primaryContainer}>
      <AppText style={styles.pageTile}>{pageTile}</AppText>
      <AppText style={styles.pageSubTitle}>{pageSubTitle}</AppText>
      </View>
      </>
    );
}

const styles = StyleSheet.create({
  pageTile: {
    fontSize:30,
    color: 'white',
    fontWeight: 'bold',
  },

  pageSubTitle: {
    fontSize:14,
    color: 'white',
  },

  primaryContainer: { 
    margin: 10,
    padding: 30,
    borderRadius: 5,
    alignItems: 'center',
    borderCurve: 'circular',
    justifyContent: 'center',
    backgroundColor: Platform.OS === 'android' ? 'green' : 'skyblue',
  },
})



export default PageHeading;