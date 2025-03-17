import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

import colors from '../config/colors'

function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]} ]} onPress={onPress}>
        
            <Text style={styles.text}>
                {title}
            </Text>
        
        </TouchableOpacity>
    );
}

    const styles = StyleSheet.create({
        button: {
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            borderRadius: 25,
            width: '100%',
            padding: 15,
        },
        text: {
            textTransform: 'uppercase',
            color: colors.white,
            fontWeight: 'bold',
            fontSize: 18,
        }
    })
export default AppButton;