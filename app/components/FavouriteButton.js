import React, {Component} from "react";
import {TouchableOpacity, View, StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MATERNITY_KEY_CONTACTS = "Maternity Services Key Contacts"
const MATERNITY_KEY_CONTACTS_TEXT = "Please fax initial referrals. For all subsequent queries about hospital\
    site allocation, please contact our maternity shared care coordinator\
    (for shared care patients) or midwife manager of clinic."
const SPECIALIST_OBSTETRICIAN_CONTACTS = "Specialist Obstetrician Contacts"
const SPECIALIST_OBSTETRICIAN_CONTACTS_TEXT = "Please fax initial referrals. For all subsequent queries about hospital\
    site allocation, please contact our maternity shared care coordinator\    (for shared care patients) or midwife manager of clinic."
    

export default class FavouriteButton extends Component {

    favourited = false

    // state = {
    //     favourited: false
    // }

    componentDidMount() {
        console.log('I was triggered during componentDidMount')
      }

    constructor(isFavourited) {
        f = isFavourited
        this.favourited = isFavourited
        console.log('CONSTRUCTOR')
    }

    onPress = () => {
        console.log(!this.favourited)
        this.favourited = !this.favourited
        this.render()
    }

    render() {
        console.log(this.favourited)
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {this.onPress}}>
                <View style={[{
                            flexDirection: "row"
                        }]}>
                    {this.favourited ? <MaterialCommunityIcons name="heart" color="white" size={39} style={styles.headerIcon}/> : <MaterialCommunityIcons name="heart-outline" color="white" size={39} style={styles.headerIcon}/>}
                </View>
            </TouchableOpacity>
        ) 
    }    
}


const styles = StyleSheet.create({
    headerIcon: {
        paddingLeft: 90
    }
});