import React, {useState, useEffect,Component} from "react";
import { Searchbar } from 'react-native-paper';

import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    LayoutAnimation,
    UIManager, Platform, Button, Linking
} from "react-native";

export function FacilitiesPage() {
    const CONTENT = [
        {
            isExpanded: false,
            category_name: 'Monash Medical Center',
            subcategory: [
                {id: 1, val: 'Description', descriptionVal: "Monash Medical Centre is a 640-bed teaching and research hospital of international standing providing a comprehensive range of specialist surgical, medical, allied health and mental health services to our community."},
                {id: 2, val: 'Maps', lat: "-37.91428962054958", long: "145.1319808081597", label: "Monash" },
                {id: 3, val: 'Phone'},
            ]


        },
        {
            isExpanded: false,
            category_name: 'Monash Dandenong',
            subcategory: [
                {id: 1, val: 'Description',descriptionVal: "Dandenong Hospital is a 520 bed acute hospital providing a wide range of health services to the people living and working in Dandenong and surrounding areas. "},
                {id: 2, val: 'Maps'},
                {id: 3, val: 'Phone'},
            ]
        }

    ];
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

                              <FacilityComponents props =  {object}/>
                              <View style={styles.separator }/>

                          </TouchableOpacity>
                      ))
                  }
              </View>
          </View>
        )
    }
    const [multiSelect, setMultiSelect] = useState(false);
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if(multiSelect){
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            array.map((value, placeIndex) =>
                placeIndex === index
                ? (array[placeIndex]['isExpanded']) = !array[placeIndex]['isExpanded']
                : (array[placeIndex]['isExpanded']) = false
            );
        }
        setListDataSource(array)
    }
    if (Platform.OS === 'android'){
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    //__________________________________________________Maps,Phone,email redirecting

    const showInMapClicked = (props) => {

        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${props.lat},${props.long}`;
        const label = props.label;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });

        Linking.openURL(url)

      };

    const openGmail = () => {
       Linking.openURL('mailto:support@example.com')
        };

    const openPhone = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`)
    }

    const FacilityComponents = ({props}) => {
        if (props.val == "Description"){
           var description = props.descriptionVal;
           return(

               <Text style={styles.Text}>{description}</Text>
           )

        }
        if (props.val == "Maps") {
            let valuesMaps={
               lat: props.lat,
               long: props.long,
               label: props.label
             }

            return (
                <Button  style={{fontSize: 20, color: 'green'}}
                   styleDisabled={{color: 'red'}}

                   onPress={() => showInMapClicked(valuesMaps)}
                    title="Maps">
                </Button> )
        }
        if (props.val == "Phone"){
            return (
                        <Button  style={{fontSize: 20, color: 'green'}}
                           styleDisabled={{color: 'red'}}
                           onPress={() => openPhone(props)}
                            title="Phone">
                        </Button> )
        }
        else {
            return null

        };
    };
    const SearchBar = () => {
      const [searchQuery, setSearchQuery] = React.useState('');
      const onChangeSearch = query => setSearchQuery(query);

      return (
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      );
};
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
             <SearchBar/>
                <View style={styles.header}>

                    <Text style={styles.titleText}>Tap on a facility to learn more</Text>
                    <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
                        <Text style={styles.headerButton}>
                            {
                                multiSelect
                                ? 'Enable Single \n Expand'
                                : 'Enable multiple \n Expand'
                            }
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {
                        listDataSource.map((item,key) =>(
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
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
})