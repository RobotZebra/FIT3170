import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { colors } from "../styling/appTheme";
import { vw, vh } from 'react-native-expo-viewport-units'; 
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { newDueDate, newPregnancyStatus }  from '../../src/redux/store'
import { useDispatch } from 'react-redux'

const GuestScreen = ({ navigation }) =>  {

    const [openPreg, setOpenPreg] = useState(false);
    const [valuePreg, setValuePreg] = useState(null);
    const [pregnancyStatus, setPregnancyStatus] = useState([
        {label: 'Trying to get pregnant', value: 'will'},
        {label: 'Currently Pregnant', value: 'am'},
        {label: 'New mother', value: 'was'},
    ]);

    const [inputs, setInput] = useState({
        pregnancyStatus: '',
        dueDate: '',
    });

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState("Due Date");

    // Allows for updates to Redux store
    const dispatch = useDispatch()

    // function to update user inputs
    const getUserInput = (text, inputField) => {
        setInput(prevState =>  ({...prevState, [inputField]: text }))
    }

    // Hide date modal, used by cancel button on native date picker.
    const hideDateModal = () => {
        setOpenDate(false);
    }

    // Confirm date selection
    // TODO: Rename for readability across Team 4 code
    const handleConfirm = (date) => {
        setDate(date);
        hideDateModal();
        getUserInput(date, 'dueDate'); // update user input object
    }

    // // Store pregnancy status and due date using redux, for use by rest of app in place of DB
    // const addToStore = () => {
    //     dispatch(newDueDate(inputs.dueDate))
    //     dispatch(newPregnancyStatus(inputs.pregnancyStatus))
    // }

    // // Enter main app without an account
    // const enterGuestMode = () => {
    //     addToStore();
    //     navigation.navigate('Dashboard');
    // }


    
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

                {/* Text warning for guest logins */}
                <Text style={styles.warningText}> Warning: Any information you input will be lost if your app's data is cleared or deleted. To safeguard your data, use an account. </Text>

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
                    
                    style={[styles.modalField, styles.modalPregDropdown, styles.errorField]}
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
                    style={[styles.modalButton, styles.loginButton]} 
                    activeOpacity='0.5'
                    onPress={() => enterGuestMode() }
                >
                    <Text style={styles.buttonText}>Login as Guest</Text>
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

            <View>
                <Text style={styles.resetPasswordInfo}>
                    Forgot your password?
                </Text>
                <TouchableOpacity 
                    style={[styles.modalButton, styles.resetButton]} 
                    onPress={() => { navigation.navigate('Reset'); }} 
                    activeOpacity='0.5'
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default GuestScreen;

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
    warningText: {
        textAlign: 'center',
        top: vh(15),
        color: colors.secondary,
        paddingHorizontal: vw(8)
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        
        position: 'absolute',
        height: vh(6),

        backgroundColor: colors.tertiary,
        borderRadius: vw(2),
    },
    modalPregDropdown: {
        top: vh(17),
        left: vw(7),
    },
    modalPregDropdownBox: {
        width: "84%",
        top: vh(17),
        left: vw(7),

        borderRadius: 0,
        borderWidth: 0,
    },
    dropdownItem: {
        borderTopWidth: 1,
        borderColor: "#828282"
    },
    dueDateField: {
        top: vh(35),
    },
    loginButton: {
        width: "50%",
        bottom: vh(4),
    },
    buttonText: {
        color: 'white',

        fontWeight: 'bold',
    },
    newUserInfo: {
        right: vw(21),
        top: vh(83.7),
        
        color: colors.secondary,
        fontWeight: 'bold',
    },
    registerButton: {
        top: vh(82), 
        left: vw(25),

        paddingHorizontal: vw(6),
    },
    resetPasswordInfo: {
        right: vw(21),
        top: vh(89.5),

        color: colors.secondary,
        fontWeight: 'bold'
    },
    resetButton: {
        top: vh(88), 
        left: vw(32),

        paddingHorizontal: vw(6),
    },
})

