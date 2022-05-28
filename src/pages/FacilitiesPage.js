import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  LayoutAnimation,
  UIManager,
  Platform,
  Linking,
} from 'react-native';

export function FacilitiesPage() {
  const CONTENT = [
    {
      isExpanded: false,
      category_name: 'Monash Medical Center',
      subcategory: [
        {
          id: 1,
          val: 'Description',
          descriptionVal:
            'Monash Medical Centre is a 640-bed teaching and research hospital of international standing providing a comprehensive range of specialist surgical, medical, allied health and mental health services to our community.',
        },
        {
          id: 2,
          val: 'Directions',
          lat: '-37.91428962054958',
          long: '145.1319808081597',
          label: 'Monash',
        },
        { id: 3, val: 'Facility Map' },
        { id: 4, val: 'Call Hospital', number: '(03)95946666' },
        { id: 5, val: 'Feedback' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Monash Dandenong',
      subcategory: [
        {
          id: 1,
          val: 'Description',
          descriptionVal:
            'Dandenong Hospital is a 520 bed acute hospital providing a wide range of health services to the people living and working in Dandenong and surrounding areas. ',
        },
        { id: 2, val: 'Directions' },
        { id: 3, val: 'Facility Map' },
        { id: 4, val: 'Call Hospital', number: '(03)95541000' },
        { id: 5, val: 'Feedback' },
      ],
    },
  ];
  const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
      if (item.isExpanded) {
        setLayoutHeight(null);
      } else {
        setLayoutHeight(0);
      }
    }, [item.isExpanded]);

    return (
      <View>
        <TouchableOpacity style={styles.item} onPress={onClickFunction}>
          <Text style={styles.itemText}>{item.category_name}</Text>
        </TouchableOpacity>
        <View
          style={{
            height: layoutHeight,
            overflow: 'hidden',
          }}>
          {item.subcategory.map((object, key) => (
            <View key={key} style={styles.content}>
              <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <FacilityComponents props={object} />
              </View>

              <View style={styles.separator} />
            </View>
          ))}
        </View>
      </View>
    );
  };

  // commented out to satisfy the linter
  // const [multiSelect, setMultiSelect] = useState(false);
  const multiSelect = false;
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      array.map((value, placeIndex) =>
        placeIndex === index
          ? (array[placeIndex]['isExpanded'] = !array[placeIndex]['isExpanded'])
          : (array[placeIndex]['isExpanded'] = false)
      );
    }
    setListDataSource(array);
  };
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  //__________________________________________________Maps,Phone,email redirecting

  const showInMapClicked = (props) => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${props.lat},${props.long}`;
    const label = props.label;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  /**
   * 
   * commented out to satisfy the linter
  const openGmail = () => {
    Linking.openURL('mailto:support@example.com');
  };
   */

  const openPhone = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const FacilityComponents = ({ props }) => {
    if (props.val == 'Description') {
      var description = props.descriptionVal;
      return <Text style={styles.Text}>{description}</Text>;
    }
    if (props.val == 'Directions') {
      let valuesMaps = {
        lat: props.lat,
        long: props.long,
        label: props.label,
      };
      return <ContactCardDirections mapVals={valuesMaps}></ContactCardDirections>;
    }
    if (props.val == 'Call Hospital') {
      return <ContactCardPhone number={props.number}></ContactCardPhone>;
    }

    if (props.val == 'Facility Map') {
      return <ContactFaciltyMap number={props.number}></ContactFaciltyMap>;
    }
    if (props.val == 'Feedback') {
      return <ContactFeedback />;
    } else {
      return null;
    }
  };
  function ContactCardDirections({ mapVals }) {
    return (
      <TouchableOpacity
        style={styles.contactCardLight}
        activeOpacity={0.5}
        onPress={() => {
          showInMapClicked(mapVals);
        }}>
        <View style={[{ flexDirection: 'row' }]}>
          <Text style={styles.contactCardText}>Directions</Text>

          <View>
            <MaterialCommunityIcons
              name="google-maps"
              color="white"
              size={39}
              style={styles.iconStyles}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  function ContactCardPhone({ number }) {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          openPhone(number);
        }}>
        <View style={styles.contactCardLight}>
          <View
            style={[
              {
                flexDirection: 'row',
              },
            ]}>
            <Text style={styles.contactCardText}>Phone</Text>

            <View>
              <MaterialCommunityIcons
                name="phone"
                color="white"
                size={39}
                style={styles.iconStyles}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // commentted out to satisfy the linter
  //function ContactFaciltyMap({ number }) {
  function ContactFaciltyMap() {
    return (
      <View style={styles.contactCardLight}>
        <View
          style={[
            {
              flexDirection: 'row',
            },
          ]}>
          <Text style={styles.contactCardText}>Facility Map</Text>

          <View>
            <TouchableOpacity activeOpacity={0.5}>
              <MaterialCommunityIcons
                name="map"
                color="white"
                size={39}
                style={styles.iconStyles}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // Function redirects user to the feedback form pf Monash Womens health
  async function openFeedbackURL() {
    const feedbackURL =
      'https://forms.office.com/Pages/ResponsePage.aspx?id=Zs9y_YqG3U6PhI6Rphirf5jQsf3HpdFApCWZr5USPO1UMFJTVVExWFdMMk5NMVBZUEVCMUdHVzg2SS4u';
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(feedbackURL);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(feedbackURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${feedbackURL}`);
    }
  }

  function ContactFeedback() {
    return (
      <View style={styles.contactCardLight}>
        <View
          style={[
            {
              flexDirection: 'row',
            },
          ]}>
          <Text style={styles.contactCardText} onPress={() => openFeedbackURL()}>
            Give Feedback
          </Text>

          <View>
            <TouchableOpacity activeOpacity={0.5}>
              <MaterialCommunityIcons
                name="chat"
                color="white"
                size={39}
                style={styles.iconStyles}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query) => setSearchQuery(query);

    return <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar />
        <View style={styles.header}>
          <Text style={styles.titleText}>Tap on a facility to learn more</Text>
        </View>

        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              item={item}
              onClickFunction={() => {
                updateLayout(key);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButton: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  item: {
    backgroundColor: 'purple',
    padding: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 13,
    padding: 20,
    color: 'black',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
  },
  separator: {
    height: 0.5,
    backgroundColor: 'white',
    width: '100%',
  },
  contactCardLight: {
    width: 350,
    height: 60,
    backgroundColor: '#91298D',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 25,
  },

  contactCardTextHeader: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: 18,
    fontWeight: 'bold',
  },

  contactCardText: {
    color: 'white',
    paddingTop: 8,
    paddingLeft: 51,
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  iconStyles: {
    paddingRight: 12,
  },
});
