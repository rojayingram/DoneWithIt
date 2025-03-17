import React from 'react';
import { StyleSheet, Text } from 'react-native';


function AppText({children}) {
    return (
        <Text style={styles.Text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    Text:{
        color: "green",
        fontSize: 18,
        fontFamily: "Roboto",
    }
})

export default AppText;