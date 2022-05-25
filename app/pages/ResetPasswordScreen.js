import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, TextInput, Image, Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { colors } from "../styling/appTheme";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset} from '@firebase/auth';
import { vw, vh } from 'react-native-expo-viewport-units';


const ResetPasswordScreen = ({ navigation }) => {

    const [inputs, setInput] = useState({
        email: '',
        newPassword: '',
        verificationCode: '',
    })

    // Vishal's function for updating states
    const getUserInput = (text, inputField) => {
        setInput(prevState =>  ({...prevState, [inputField]: text }))
    }

    // Database and auth function
    const auth = getAuth();

    // Handle sending password reset verification email
    const handlePasswordReset = () => {
        if(inputs.email === '') {
            Alert.alert("Enter an email address")
        } else {
            sendPasswordResetEmail(auth, inputs.email)
            .then(() => {
                Alert.alert("Check your email for a verification code.")
            })
        }
    }

    
    return (
        // Dismiss keyboard on click outside inputs
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <View style={styles.pageStyling}>
            
            {/* Purple background block */}
            <View style={styles.upperPortion}>
            </View>

            {/* Modal Window */}
            <View style={styles.modalWindow}>
                
                {/* MHW Logo */}
                <View style={styles.imageArea}>
                    <Image 
                        style={{width: '100%'}} 
                        source={require('../../assets/monashlogo.png')} 
                        resizeMode='contain' 
                    />
                </View>

                {/* Text fields */}
                
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="grey"
                    style={[styles.modalField, styles.emailField]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    autoComplete="email"
                    onChangeText={ (text) => { getUserInput(text, 'email')}}
                />

                {/* Buttons */}
                <TouchableOpacity
                    style={[styles.modalButton, styles.resetButton]}
                    activeOpacity = '0.5'
                    onPress={ () => handlePasswordReset() }>
                    <Text style={styles.buttonText}> Reset Password </Text>
                </TouchableOpacity>
            </View>

            {/* Navigate back to Login */}
            <View>
                <Text style={styles.loginInfo}>
                    Remembered your password?
                </Text>
                <TouchableOpacity 
                    style={[styles.modalButton, styles.loginButton]} 
                    onPress={() => { navigation.navigate('Login'); }} 
                    activeOpacity='0.5'
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
        </TouchableWithoutFeedback>
    )
}


export default ResetPasswordScreen;

// Stylesheet
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
    modalField: {
        position: 'absolute',
        padding: vw(3),
        height: vh(6),
        width: "84%",
        backgroundColor: colors.primary,
        borderRadius: 2,
        borderWidth: 0,
    },
    imageArea: {
        position: 'absolute',

        left: vw(8),
        width: '84%',
        top: vh(3),
    },
    emailField: {
        top: vh(17),
    },
    modalButton: {
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        height: vh(6),

        backgroundColor: colors.tertiary,
        borderRadius: vw(2),
    },
    resetButton: {
        width: "50%",
        bottom: vh(4),
    },
    loginInfo: { 
        top: vh(89.5),
        right: vw(16),

        color: colors.secondary,
        fontWeight: 'bold',
    },
    loginButton: {
        top: vh(88),
        left: vw(43),
        paddingHorizontal: vw(6),
        
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})