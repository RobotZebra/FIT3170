import React, {useState, useEffect} from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    LayoutAnimation,
    UIManager, Platform
} from "react-native";

export function FacilitiesPage() {
    //dummy content for now
    const CONTENT = [
        {
            isExpanded: false,
            category_name: 'Item 1',
            subcategory: [
                {id: 1, val: 'sub1'},
                {id: 2, val: 'sub2'}
            ]
        },
        {
            isExpanded: false,
            category_name: 'Item 2',
            subcategory: [
                {id: 3, val: 'sub3'},
                {id: 4, val: 'sub4'}
            ]
        }

    ];
    const ExpandableComponent = (item, onClickFunction) => {
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
                    <text style={styles.itemText}>
                        {item.category_name}
                    </text>
                </TouchableOpacity>
                <View
                    style={{
                    height: layoutHeight,
                    overflow: 'hidden'
                    }}
                >
                    {
                        item.subcategory.map((item, key) => (
                            <TouchableOpacity
                                key = {key}
                                style = {styles.content}
                            >
                                <Text style={styles.text}>
                                    {key}. {item.val}
                                </Text>
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
            //if multi select is enabled
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            //if single select is enabled
            array.map((value, placeindex) =>
                placeindex === index
                ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
                : (array[placeindex]['isExpanded']) = false
            );
        }
        setListDataSource(array)
    }
    if (Platform.OS === 'android'){
        UIManager.setLayoutAnimationEnabledExperimental(true);

    }

    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <view style={styles.header}>
                <text style={styles.titleText}>expandable list view</text>
                <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
                    <text style={styles.headerButton}>
                        {
                            multiSelect
                            ? 'Enable Single \n Expand'
                            : 'Enable multiple \n Expand'
                        }
                    </text>
                </TouchableOpacity>
            </view>
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