import React, { useState } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import { colors } from "../styling/appTheme";
import { vw, vh } from 'react-native-expo-viewport-units';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getAuth , createUserWithEmailAndPassword, updateProfile , sendEmailVerification} from '@firebase/auth';
import { doc , setDoc, getFirestore} from '@firebase/firestore';
import firebaseApp from '../../src/firebase/config';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const RegisterScreen = ({ navigation }) => {

    const [openPreg, setOpenPreg] = useState(false);
    const [valuePreg, setValuePreg] = useState(null);
    const [pregnancyStatus, setPregnancyStatus] = useState([
        {label: 'Trying to get pregnant', value: 'will'},
        {label: 'Currently Pregnant', value: 'am'},
        {label: 'New mother', value: 'was'},
    ]);

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState("Due Date");

    const handleConfirm = (date) => {
        setDate(date);
        hideDateModal();
        getUserInput(date, 'dueDate'); // update user input object
    }

    const hideDateModal = () => {
        setOpenDate(false);
    }

    const [inputs, setInputs] = useState({
        firstName: '',
        familyName: '',
        email: '',
        password: '',
        pregnancyStatus: '',
        dueDate: '',
    });

    // function to update user inputs
    const getUserInput = (text, inputField) => {
        setInputs( prevState => ({...prevState, [inputField]: text}));
    }

    const [errorCheck, setErrorCheck] = useState({
        firstName: false,
        familyName: false,
        email: false,
        password: false,
        pregnancyStatus: false,
        dueDate: false,
    });

    // Getting the database and the authentication function
    const auth = getAuth();
    const db = getFirestore(firebaseApp);

    // Handling the registration 
    const handleUserSignUp  =  () => {
        if(errorCheck.email || errorCheck.dueDate || errorCheck.firstName || errorCheck.familyName || errorCheck.password || errorCheck.pregnancyStatus) {
          Alert.alert('Enter correct details.')
        } else {
           createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
          .then((res) => {
            sendEmailVerification(auth.currentUser)
            navigation.navigate('Login')
            addToDb()
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('That email address is already in use!');
              }
          })
        }
      }

      // Adding the user details to the firestore database.  
      const addToDb = async () => {
          const userData  = {
                firstName : inputs.firstName,
                familyName : inputs.familyName,
                dueDate : inputs.dueDate,
                pregnancyStatus : inputs.pregnancyStatus, 
                email : inputs.email,
                }
            await setDoc(doc(db, "user-collection", auth.currentUser.uid), userData)
    }

    const onSubmit = () => {
        for (const field in inputs) {
            if (inputs[field] == '') {
                setErrorCheck(prevState => ({ ...prevState, [field]: true}))
            } else {
                // check if names contain numbers
                if (field == 'firstName' || field == 'familyName') {
                    setErrorCheck(prevState => ({ ...prevState, [field]: !/^[a-zA-Z]+$/.test(inputs[field]) }));
                } 
                // check if password is greater than 6 characters
                else if (field == 'password') {
                    setErrorCheck(prevState => ({ ...prevState, [field]: inputs[field].length < 6 }));
                } 
                // check if email is correct 
                else if (field == 'email') {
                    setErrorCheck(prevState => ({ ...prevState, [field]: !emailRegex.test(inputs[field]) }));
                }
                // all other cases
                else {
                    setErrorCheck(prevState => ({ ...prevState, [field]: false}));
                }
            }

            // remove error from due date field if it is not visible
            if (inputs['pregnancyStatus'] != 'am') {
                setErrorCheck(prevState => ({ ...prevState, ['dueDate']: false}))
            }
        }
        handleUserSignUp();
    }

    return (
        // dismiss keyboard when clicked outside any input field
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.pageStyling}>
                <View style={styles.upperPortion}>
                </View>

                {/* render the floating modal window containing the form for registering */}
                <View style={styles.modalWindow}>
                    <View style={styles.imageArea}>
                        <Image 
                            style={{width: '100%'}} 
                            source={require('../../assets/monashlogo.png')} 
                            resizeMode='contain' 
                        />
                    </View>
                    
                    {/* render text fields for registering a user */}
                    <TextInput 
                        placeholder='First Name' 
                        placeholderTextColor="grey" 
                        style={errorCheck.firstName ? [styles.modalField, styles.firstNameField, styles.errorField] : [styles.modalField, styles.firstNameField]} 
                        textContentType="givenName" 
                        onChangeText={(text) => { getUserInput(text, 'firstName'); }}
                    />
                    <TextInput 
                        placeholder='Last Name' 
                        placeholderTextColor="grey" 
                        style={errorCheck.familyName ? [styles.modalField, styles.lastNameField, styles.errorField] : [styles.modalField, styles.lastNameField]} 
                        textContentType="familyName"
                        onChangeText={(text) => { getUserInput(text, 'familyName'); }}
                    />
                    <TextInput 
                        placeholder='Email' 
                        placeholderTextColor="grey" 
                        style={errorCheck.email ? [styles.modalField, styles.emailField, styles.errorField] : [styles.modalField, styles.emailField]} 
                        keyboardType='email-address' 
                        autoCapitalize='none' 
                        textContentType='emailAddress'
                        onChangeText={(text) => { getUserInput(text, 'email'); }}
                    />
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor="grey" 
                        style={errorCheck.password ? [styles.modalField, styles.passwordField, styles.errorField] : [styles.modalField, styles.passwordField]} 
                        autoCapitalize='none' 
                        textContentType='newPassword' 
                        secureTextEntry 
                        onChangeText={(text) => { getUserInput(text, 'password'); }}
                    />

                    {/* add a custom dropdown for choosing pregnancy status */}
                    <DropDownPicker
                        placeholder="Pregnancy Status"
                        onPress={Keyboard.dismiss}

                        open={openPreg}
                        value={valuePreg}
                        items={pregnancyStatus}
                        setOpen={setOpenPreg}
                        setValue={setValuePreg}
                        setItems={setPregnancyStatus}
                        
                        style={errorCheck.pregnancyStatus ? [styles.modalField, styles.modalPregDropdown, styles.errorField] : [styles.modalField, styles.modalPregDropdown]}
                        dropDownContainerStyle={styles.modalPregDropdownBox}
                        listItemContainerStyle={styles.dropdownItem}
                        listItemLabelStyle={{ color: 'grey' }}
                        selectedItemLabelStyle={{ fontWeight: 'bold' }}
                        placeholderStyle={{ color: 'grey' }}

                        onChangeValue={(item) => { getUserInput(item, 'pregnancyStatus'); }}
                    />

                    {/* render native date picker only for a specific pregnancy status */}
                    <TouchableOpacity 
                        style={ valuePreg == 'am' ? [styles.modalField, styles.dueDateField, { alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }] : { display: 'none' }} 
                        onPress={() => { setOpenDate(true); }}
                        activeOpacity='0.8'
                    >   
                        {/* display date chosen in the field */}
                        { typeof(date) == "string" ? <Text style={{ color: "grey", flex:.8, marginLeft: -vw(1) }}> {date} </Text> : <Text style={{ color: 'black', flex:.8 }}>{date.toDateString()}</Text>}

                        <Image 
                            source={require('../../assets/due_date_calendar_register_page.png')} 
                            style={{ width: 25, height: 25, flex:.2, marginLeft: vw(27) }}
                            resizeMode='contain'
                        />

                        {/* native date picker */}
                        <DateTimePickerModal 
                            isVisible={openDate}
                            onConfirm={handleConfirm}
                            onCancel={hideDateModal}
                            date={ typeof(date) == "string" ? new Date() : date }
                            minimumDate={new Date()}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.modalButton, styles.registerButton]} 
                        activeOpacity='0.5'
                        onPress={() => { onSubmit(); }}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.oldUserInfo}>
                        Already have an account?
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

export default RegisterScreen;

// style sheet for the page
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
        top: vh(6),
        height: vh(75),
        width: vw(86),

        backgroundColor: "#D4BFE3",
        borderRadius: 16,

        shadowOpacity: 0.1,
        shadowRadius: 16,
        shadowColor: '#4B4B4B',
        shadowOffset: { width: 2, height: 2 },
    },
    imageArea: {
        position: 'absolute',

        left: vw(8),
        width: '84%',
        top: vh(3),
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
    firstNameField: {
        top: vh(14),
    },
    lastNameField: {
        top: vh(22),
    },
    emailField: {
        top: vh(30),
    },
    passwordField: {
        top: vh(38),
    },
    modalDropdownBox: {
        borderRadius: 0,
        borderWidth: 0,

        width: "84%",
    },
    modalPregDropdown: {
        top: vh(46),
        left: vw(7),
    },
    modalPregDropdownBox: {
        width: "84%",
        top: vh(52),
        left: vw(7),

        borderRadius: 0,
        borderWidth: 0,
    },
    dropdownItem: {
        borderTopWidth: 1,
        borderColor: "#828282"
    },
    dueDateField: {
        top: vh(54),
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        
        position: 'absolute',
        height: vh(6),

        backgroundColor: colors.tertiary,
        borderRadius: vw(2),
    },
    registerButton: {
        top: vh(67),
        width: vw(40),
    },
    buttonText: {
        color: 'white',

        fontWeight: 'bold',
    },
    oldUserInfo: {
        right: vw(17),
        top: vh(90),

        color: colors.secondary,
        fontWeight: 'bold',
    },
    loginButton: {
        top: vh(88),
        left: vw(35),

        paddingHorizontal: vw(10),
    },
    errorField: {
        borderColor: 'red',
        borderWidth: 0.75,
        borderRadius: 2,
    }
})