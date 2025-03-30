import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';

function AppTextInput({icon, ...otherProps}) {
    return (
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={30} color={colors.medium} style={styles.icon}/>}
                <TextInput style={styles.textInput} {...otherProps}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
        flexDirection: "row",
        backgroundColor: colors.light,
    },
    icon: {
        marginRight: 10
    },
    textInput:{
        fontSize: 18,
        color:colors.dark,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppTextInput;