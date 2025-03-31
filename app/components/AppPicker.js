import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles'
import AppText from './AppText';

function AppPicker({icon, placeholder, ...otherProps}) {
    return (
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={30} color={defaultStyles.colors.medium} style={styles.icon}/>}
                <AppText style={styles.text}>{placeholder}</AppText>
                {icon && <MaterialCommunityIcons name={"chevron-down"} size={30} color={defaultStyles.colors.medium}/>}
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

    text: {
        flex: 1,
    },
})

export default AppPicker;