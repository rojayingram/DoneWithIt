import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton'

function WelcomeScreen(props) {
    return (
        <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')}
        >   <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagline}> Sell What You Don't Need </Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login"/>
                <AppButton title="Register" color="secondary"/>
            </View>
        </ImageBackground>
    );
}
    const styles = StyleSheet.create({
        background: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
        },
        buttonContainer: {
            padding: 20,
            width: '100%',
        },
        loginButton: {
            backgroundColor: colors.primary,
            height: 70,
        },
        logo: {
            height: 100,
            width: 100,
        },
        logoContainer: {
            position: 'absolute',
            alignItems: 'center',
            top: 70,
        },
        tagline: {
            fontSize: 25,
            fontWeight: '600',
            paddingVertical: 20,
        }
    })

export default WelcomeScreen;