import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Button,
  Linking,
} from "react-native";
import { Searchbar } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import firebaseApp from "../firebase/config.js";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

export function PractitionersPage() {
  const MATERNITY_KEY_CONTACTS = "Maternity Services Key Contacts";
  const MATERNITY_KEY_CONTACTS_TEXT =
    "Please fax initial referrals. For all subsequent queries about hospital\
    site allocation, please contact our maternity shared care coordinator\
    (for shared care patients) or midwife manager of clinic.";
  const SPECIALIST_OBSTETRICIAN_CONTACTS = "Specialist Obstetrician Contacts";
  const SPECIALIST_OBSTETRICIAN_CONTACTS_TEXT =
    "Please fax initial referrals. For all subsequent queries about hospital\
    site allocation, please contact our maternity shared care coordinator    (for shared care patients) or midwife manager of clinic.";

  global.CONTENT = [
    {
      isExpanded: false,
      favourited: true,
      category_name: MATERNITY_KEY_CONTACTS,
      subcategory: [
        {
          id: 1,
          val: "Description",
          descriptionVal: MATERNITY_KEY_CONTACTS_TEXT,
        },
        { id: 2, val: "Call", phone: "0412345690" },
        { id: 3, val: "Email", email: "example@gmail.com" },
      ],
    },
  ];

  useEffect(async () => {
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "practitioner-collection"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data = doc.data();
      global.CONTENT.push({
        isExapnded: false,
        favourited: false,
        category_name: data.name,
        subcategory: [
          { id: 1, val: "Description", descriptionVal: data.description },
          { id: 2, val: "Call", phone: data.phone },
          { id: 3, val: "Email", email: data.email },
        ],
      });
    });
  }, []);

  const openGmail = () => {
    Linking.openURL("mailto:support@example.com");
  };

  const openPhone = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const PractitionerComponents = ({ props }) => {
    if (props.val == "Description") {
      var description = props.descriptionVal;
      return <Text style={styles.text}>{description}</Text>;
    } else if (props.val == "Email") {
      return (
        <EmailButton style={styles.center} email={props.email}></EmailButton>
      );
    } else if (props.val == "Call") {
      return <PhoneButton number={props.phone}></PhoneButton>;
    } else {
      return null;
    }
  };

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
          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <Text style={styles.itemText}>{item.category_name}</Text>

            {/* <FavouriteButton favourited={item.favourited}></FavouriteButton> */}
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: layoutHeight,
            overflow: "hidden",
          }}
        >
          {item.subcategory.map((object, key) => (
            <TouchableOpacity key={key} style={styles.content}>
              <PractitionerComponents props={object} />
              <View style={styles.separator} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  const [listDataSource, setListDataSource] = useState(global.CONTENT);

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array.map((value, placeIndex) =>
      placeIndex === index
        ? (array[placeIndex]["isExpanded"] = !array[placeIndex]["isExpanded"])
        : (array[placeIndex]["isExpanded"] = false)
    );
    setListDataSource(array);
  };

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  global.searchQuery = "";

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    const searchText = () => {
      // let text = global.searchQuery.toLowerCase()
      let text = searchQuery.toLowerCase();
      if (text != "" && text != null) {
        let practitioners = global.CONTENT;
        const filteredPracititoners = practitioners.filter((practitioner) => {
          return practitioner.category_name.toLowerCase().includes(text);
        });
        console.log(filteredPracititoners);
        setListDataSource(filteredPracititoners);
      } else {
        setListDataSource(global.CONTENT);
      }
    };

    return (
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        style={styles.searchBar}
        onChangeText={onChangeSearch}
        onSubmitEditing={searchText}
        onBlur={searchText}
      />
    );
  };

  function FavouriteButton(item) {
    // Favourite button
    if (item.favourited) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            favouriteContact(item);
          }}
        >
          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <MaterialCommunityIcons
              name="heart"
              color="white"
              size={39}
              style={styles.headerIcon}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            favouriteContact(item);
          }}
        >
          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              color="white"
              size={39}
              style={styles.headerIcon}
            />
          </View>
        </TouchableOpacity>
      );
    }
  }

  function favouriteContact(contact) {
    contact.favourited = true;

    return <FavouriteButton item={contact}></FavouriteButton>;
  }

  function PhoneButton({ number }) {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          openPhone(number);
        }}
      >
        <View style={styles.button}>
          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <Text style={styles.contactCardText}>Phone</Text>
            <View>
              <MaterialCommunityIcons
                name="phone"
                color="white"
                size={39}
                style={styles.buttonIcon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function EmailButton({ email }) {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          openGmail(email);
        }}
      >
        <View style={styles.button}>
          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <Text style={styles.contactCardText}>Email</Text>

            <MaterialCommunityIcons
              style={styles.buttonIcon}
              name="email"
              color="white"
              size={39}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  console.log(global.CONTENT);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading1: {
    color: "#91298D",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  headerButton: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  item: {
    backgroundColor: "purple",
    padding: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlignVertical: "center",
    paddingTop: 9,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    padding: 20,
    color: "black",
    alignItems: "flex-start",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  separator: {
    height: 5,
    backgroundColor: "white",
    width: "100%",
  },
  buttonIcon: {
    alignItems: "center",
  },
  headerIcon: {
    paddingLeft: 90,
  },
  button: {
    width: 350,
    height: 60,
    backgroundColor: "#91298D",
    justifyContent: "space-around",
    flexDirection: "column",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 25,
    padding: 10,
  },
  contactCardTextHeader: {
    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactCardText: {
    color: "white",
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    padding: 7,
    paddingLeft: 50,
  },
  center: {
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
  },
  searchBar: {
    fontSize: 20,
    backgroundColor: "white",
    height: 40,
    paddingLeft: 20,
  },
});