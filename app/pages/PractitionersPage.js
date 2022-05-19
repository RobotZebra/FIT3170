import React, {useState, useEffect,Component} from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,
  LayoutAnimation, UIManager, Platform, Button, Linking } from "react-native";
import ContactCard from "../components/ContactCard";

export function PractitionersPage() {
  let maternityContactCardProps={
    title: "Maternity Team",
    subtitle: "Clayton",
    favourite: false
  };

  let obstetricianContactCardProps={
    title: "Obstetricians",
    subtitle: "Clayton",
    favourite: false
  };

  const MATERNITY_KEY_CONTACTS = "Maternity Services Key Contacts"
  const MATERNITY_KEY_CONTACTS_TEXT = "Ski-bi dibby dib yo da dub dub\
  Yo da dub dub\
  Ski-bi dibby dib yo da dub dub\
  Yo da dub dub\
  (I'm the Scatman)\
  Ski-bi dibby dib yo da dub dub\
  Yo da dub dub\
  Ski-bi dibby dib yo da dub dub\
  Yo da dub dub"
  const SPECIALIST_OBSTETRICIAN_CONTACTS = "Specialist Obstetrician Contacts"
  const SPECIALIST_OBSTETRICIAN_CONTACTS_TEXT = "Ba-da-ba-da-ba-be bop bop bodda bope\
  Bop ba bodda bope\
  Be bop ba bodda bope\
  Bop ba bodda\
  Ba-da-ba-da-ba-be bop ba bodda bope\
  Bop ba bodda bope\
  Be bop ba bodda bope\
  Bop ba bodda bope"

  const CONTENT = [
    {
        isExpanded: false,
        category_name: MATERNITY_KEY_CONTACTS,
        subcategory: [
            {id: 1, val: 'Description', descriptionVal: MATERNITY_KEY_CONTACTS_TEXT},
            {id: 2, val: 'Call'},
            {id: 3, val: 'Email', email: "example@gmail.com"},
            {id: 4, val: 'Fax'},
        ]


    },
    {
        isExpanded: false,
        category_name: SPECIALIST_OBSTETRICIAN_CONTACTS,
        subcategory: [
          {id: 1, val: 'Description', descriptionVal: SPECIALIST_OBSTETRICIAN_CONTACTS_TEXT},
          {id: 2, val: 'Call'},
          {id: 3, val: 'Email', email: "example@gmail.com"},
          {id: 4, val: 'Fax'},
        ]
    }
  ];

  const openGmail = () => {
    Linking.openURL('mailto:support@example.com')
     };

 const openPhone = (phoneNumber) => {
     Linking.openURL(`tel:${phoneNumber}`)
 }

 const PractitionerComponents = ({props}) => {
     if (props.val == "Description"){
        var description = props.descriptionVal;
        return(
            <Text style={styles.text}>{description}</Text>
        )

     }
     else if (props.val == "Email") {
         let valuesMaps={
            email: props.email
          }

         return (
             <Button  style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}

                onPress={() => showInMapClicked(valuesMaps)}
                 title="Email">
             </Button> )
     }
     else if (props.val == "Call"){
         return (
                     <Button  style={{fontSize: 20, color: 'green'}}
                        styleDisabled={{color: 'red'}}
                        onPress={() => openPhone(props)}
                         title="Call">
                     </Button> )
     }
     else 
     if (props.val == "Fax") {
      return (
        <Button  style={{fontSize: 20, color: 'green'}}
           styleDisabled={{color: 'red'}}
          //  onPress={() => openPhone(props)}
            title="Fax">
        </Button> )
     }
     else {
         return null

     };
 };

  const ExpandableComponent = ({item, onClickFunction}) => {
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if(item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded])

    return (
      <View>
          <TouchableOpacity
              style={styles.item}
              onPress={onClickFunction}
          >
              <Text style={styles.itemText}>
                  {item.category_name}
              </Text>
          </TouchableOpacity>
          <View
              style={{
              height: layoutHeight,
              overflow: 'hidden'
              }}
          >
              {
                  item.subcategory.map((object, key) => (
                      <TouchableOpacity
                          key = {key}
                          style = {styles.content}
                          >

                          <PractitionerComponents props =  {object}/>
                          <View style={styles.separator }/>

                      </TouchableOpacity>
                  ))
              }
          </View>
      </View>
    )
}
const [listDataSource, setListDataSource] = useState(CONTENT);
const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array.map((value, placeIndex) =>
            placeIndex === index
            ? (array[placeIndex]['isExpanded']) = !array[placeIndex]['isExpanded']
            : (array[placeIndex]['isExpanded']) = false
      );
    
    setListDataSource(array)
}
if (Platform.OS === 'android'){
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
                    {
                        listDataSource.map((item, key) =>(
                            <ExpandableComponent
                                key={item.category_name}
                                item={item}
                                onClickFunction={() => {
                                    updateLayout(key)
                                }}
                            />
                        ))
                    }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading1: {
    color: "#91298D",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    padding: 15
  },
  header: {
      flexDirection: 'row',
      padding: 10
  },
  titleText: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
  },
  headerButton: {
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 18
  },
  item: {
      backgroundColor: 'purple',
      padding: 20
  },
  itemText: {
      fontSize: 16,
      fontWeight: '500',
      color:'white'
  },
  content: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff'
  },
  text: {
      fontSize: 13,
      padding: 20,
      color: 'black',
      alignItems: "flex-start",
      justifyContent: "space-between",
      textAlignVertical: "center"
  },
  separator:{
      height: 0.5,
      backgroundColor: '#a089ad',
      width: '100%'

  }
});
