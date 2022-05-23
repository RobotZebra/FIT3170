import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { colors } from "../styling/appTheme";
import { vw, vh } from 'react-native-expo-viewport-units'; 
import firebaseApp from '../../src/firebase/config';
import { getAuth , signInWithEmailAndPassword } from '@firebase/auth';

const LoginScreen = ({ navigation }) =>  {

    const [inputs, setInput] = useState({
        email: '',
        password: '', 
    });

    // function to update user inputs
    const getUserInput = (text, inputField) => {
        setInput(prevState =>  ({...prevState, [inputField]: text }))
    }

    // Getting the authentication function
    const auth = getAuth(); 

    // Handling the login of the user
    const handleSignIn = () => {
        if(inputs.email === '' && inputs.password === '') {
          Alert.alert('Enter correct details.')
        } else {
          signInWithEmailAndPassword(auth, inputs.email, inputs.password)
          .then((user) => {
            navigation.navigate('Dashboard')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    return (
        // dismiss keyboard when clicked outside any input field
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.pageStyling}>
            <View style={styles.upperPortion}>
            </View>

            {/* render the floating modal window containing the form for logging in */}
            <View style={styles.modalWindow}>
                <View style={styles.imageArea}>
                    <Image 
                        style={{width: '100%'}} 
                        source={require('../../assets/monashlogo.png')} 
                        resizeMode='contain' 
                    />
                </View>

                {/*  render text fields for login pass with support for using saved passwords on the device */}
                <TextInput 
                    placeholder='Email' 
                    placeholderTextColor="grey" 
                    style={[styles.modalField, styles.emailField]} 
                    keyboardType='email-address' 
                    autoCapitalize='none' 
                    textContentType='emailAddress' 
                    autoComplete='email'
                    onChangeText={ (text) => { getUserInput(text, 'email'); }}
                />
                <TextInput 
                    placeholder='Password' 
                    placeholderTextColor="grey" 
                    style={[styles.modalField, styles.passwordField]} 
                    autoCapitalize='none' 
                    textContentType='password' 
                    secureTextEntry 
                    autoComplete='password'
                    onChangeText={ (text) => { getUserInput(text, 'password'); }}
                />

                <TouchableOpacity 
                    style={[styles.modalButton, styles.loginButton]} 
                    activeOpacity='0.5'
                    onPress={() => handleSignIn()}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.modalButton, styles.guestButton]} 
                    onPress={() => { navigation.navigate('Dashboard'); }} 
                    activeOpacity='0.5'
                >
                    <Text style={styles.buttonText}>Continue as Guest</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.newUserInfo}>
                    Don't have an account?
                </Text>
                <TouchableOpacity 
                    style={[styles.modalButton, styles.registerButton]} 
                    onPress={() => {  navigation.navigate('Register'); }} 
                    activeOpacity='0.5'
                >
                    <Text style={styles.buttonText}> Register Now</Text> 
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default LoginScreen;

// stylesheet for the page
const styles = StyleSheet.create({
    pageStyling: {
        alignItems: 'center',
        flex: 1,
    },
    upperPortion: {
        position: 'absolute',
        width: vw(100),
        height: vh(50),
        left: 0,
        top: 0,

        backgroundColor: colors.secondary,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    modalWindow: {
        position: 'absolute',
        alignItems: 'center',
        height: vh(55),
        top: vh(25),
        width: "84%",

        backgroundColor: "#D4BFE3",
        borderRadius: 16,

        shadowOpacity: 0.1,
        shadowRadius: 16,
        shadowColor: '#4B4B4B',
        shadowOffset: { width: 2, height: 2 },
    },
    imageArea: {
        position: 'absolute',

        top: vh(4),
        width: '84%',
    },
    modalField: {
        position: 'absolute',
        padding: vw(3),
        height: vh(6),
        width: "84%",
        backgroundColor: colors.primary,
        borderRadius: 2,
    },
    emailField: {
        top: vh(17),
    },
    passwordField: {
        top: vh(25),
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        
        position: 'absolute',
        height: vh(6),

        backgroundColor: colors.tertiary,
        borderRadius: vw(2),
    },
    loginButton: {
        width: "50%",
        bottom: vh(13),
    },
    guestButton: {
        width: "60%",
        bottom: vh(4),
    },
    buttonText: {
        color: 'white',

        fontWeight: 'bold',
    },
    newUserInfo: {
        right: vw(21),
        top: vh(90),
        
        color: colors.secondary,
        fontWeight: 'bold',
    },
    registerButton: {
        top: vh(88), 
        left: vw(25),

        paddingHorizontal: vw(6),
    },
})

