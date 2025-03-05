import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Alert, Button, StatusBar , Platform} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color={"black"}
      title='Click Me'
        onPress={() => Alert.prompt("My Title", "My Message", text => console.log(text))}/>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
  },
});
