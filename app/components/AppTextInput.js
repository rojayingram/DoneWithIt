import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles'

function AppTextInput({icon, ...otherProps}) {
    return (
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={30} color={defaultStyles.colors.medium} style={styles.icon}/>}
                <TextInput style={defaultStyles.text} {...otherProps}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 7,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: defaultStyles.colors.light,
    },
    icon: {
        marginRight: 10
    },
})

export default AppTextInput;