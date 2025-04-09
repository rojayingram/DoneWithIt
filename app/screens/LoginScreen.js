import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen(props) {

    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")} />
                
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({handleSubmit}) => (
                        <>
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                keyboardType="email-address"
                                name={"email"}
                                placeholder="Email"
                                textContentType="emailAddress"
                            />
                            
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name={"password"}
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            
                            <AppButton title="Login" onPress={handleSubmit}/>
                        </>
                    )}
                </Formik>
                
                
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;