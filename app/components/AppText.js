import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';


function AppText({children}) {
    return (
        <Text styles={styles.Text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    Text:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppText;