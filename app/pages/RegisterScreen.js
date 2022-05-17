import React, { useState } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { colors } from "../styling/appTheme";
import { vw, vh } from 'react-native-expo-viewport-units';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
    }

    const hideDateModal = () => {
        setOpenDate(false);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.pageStyling}>
                <View style={styles.upperPortion}>
                </View>

                <View style={styles.modalWindow}>
                    <View style={styles.imageArea}>
                        <Image style={{width: '100%'}} source={require('../../assets/monashlogo.png')} resizeMode='contain' />
                    </View>

                    <TextInput placeholder='First Name' placeholderTextColor="grey" style={[styles.modalField, styles.firstNameField]} textContentType="givenName" />
                    <TextInput placeholder='Last Name' placeholderTextColor="grey" style={[styles.modalField, styles.lastNameField]} textContentType="familyName" />
                    <TextInput placeholder='Email' placeholderTextColor="grey" style={[styles.modalField, styles.emailField]} keyboardType='email-address' autoCapitalize='none' textContentType='emailAddress' />
                    <TextInput placeholder='Password' placeholderTextColor="grey" style={[styles.modalField, styles.passwordField]} autoCapitalize='none' textContentType='newPassword' secureTextEntry />

                    <DropDownPicker
                        placeholder="Pregnancy Status"
                        onPress={Keyboard.dismiss}

                        open={openPreg}
                        value={valuePreg}
                        items={pregnancyStatus}
                        setOpen={setOpenPreg}
                        setValue={setValuePreg}
                        setItems={setPregnancyStatus}
                        
                        style={[styles.modalField, styles.modalPregDropdown]}
                        dropDownContainerStyle={styles.modalPregDropdownBox}
                        listItemContainerStyle={styles.dropdownItem}
                        listItemLabelStyle={{ color: 'grey' }}
                        selectedItemLabelStyle={{ fontWeight: 'bold' }}
                        placeholderStyle={{ color: 'grey' }}
                        >
                    </DropDownPicker>

                    <TouchableOpacity 
                        style={ valuePreg == 'am' ? [styles.modalField, styles.dueDateField, { alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }] : { display: 'none' }} 
                        onPress={() => { setOpenDate(true); }}
                        activeOpacity='0.8'
                    >
                        { typeof(date) == "string" ? <Text style={{ color: "grey", flex:.8, marginLeft: -vw(1) }}> {date} </Text> : <Text style={{ color: 'black', flex:.8 }}>{date.toDateString()}</Text>}

                        <Image 
                            source={require('../../assets/due_date_calendar_register_page.png')} 
                            style={{ width: 25, height: 25, flex:.2, marginLeft: vw(27) }}
                            resizeMode='contain'
                        />

                        <DateTimePickerModal 
                            isVisible={openDate}
                            onConfirm={handleConfirm}
                            onCancel={hideDateModal}
                            date={ typeof(date) == "string" ? new Date() : date }
                            minimumDate={new Date()}
                        />
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={[styles.modalButton, styles.registerButton]} activeOpacity='0.5'>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.oldUserInfo}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity style={[styles.modalButton, styles.loginButton]} onPress={() => {
                        navigation.navigate('Login');
                    }} activeOpacity='0.5'>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RegisterScreen;

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
})