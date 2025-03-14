import React from 'react';
import { StyleSheet, Text } from 'react-native';


function AppText({children}) {
    return (
        <Text style={styles.Text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    Text:{
        color: "blue",
        fontSize: 20,
        fontFamily: "Avenir",
    }
})

export default AppText;