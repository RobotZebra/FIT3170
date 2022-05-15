import React, {useState, useEffect,Component} from "react";

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
            category_name: 'Item 1',
            subcategory: [
                {id: 1, val: 'Description'},
                {id: 2, val: 'Maps', lat: "-37.91428962054958", long: "145.1319808081597", label: "Monash" },
                {id: 3, val: 'Phone'},
            ]


        },
        {
            isExpanded: false,
            category_name: 'Item 2',
            subcategory: [
                {id: 1, val: 'Description'},
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
                              <Text style={styles.text}>
                                  {key}. {object.val}
                              </Text>
                              <MyButton props =  {object}/>

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
    let props={
        lat: "-37.91428962054958",
        long: "145.1319808081597",
        label: "Monash"
      };

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

    const MyButton = ({props}) => {
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>expandable list view</Text>
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
        fontSize: 22,
        fontWeight: 'bold'
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
        fontWeight: '500'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 16,
        padding: 10
    },
    separator:{
        height: 0.5,
        backgroundColor: '#a089ad',
        width: '100%'

    }
})