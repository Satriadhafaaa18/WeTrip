import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../Components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";

export default function Homepage({ navigation }) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('semarang');
  const [items, setItems] = useState([
    {label: 'Bogor', value: 'bogor'},
    {label: 'Jakarta', value: 'jakarta'},
    {label: 'Bandung', value: 'bandung'},
    {label: 'Semarang', value: 'semarang'},
    {label: 'Surabaya', value: 'surabaya'},
    {label: 'Kendari', value: 'kendari'}
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(72, 202, 228, 1)", "transparent"]}
        style={styles.background}
      />

      <View style={styles.searchbox}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />

          <Ionicons
            name="search"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
        </View>
        <View style={styles.notificationIcon}>
        <Ionicons name="notifications" size={20} color="#0078B7" />
        </View>
          
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/PromoLiburan.jpeg")}
          style={styles.promoImage}
        />

        <View style={styles.locationContainer}>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={'Choose a fruit.'}
            style={{width: "360",borderColor: "white"}}
          />
          {/* <Text style={styles.locationText}>Semarang</Text>
          <Ionicons name="chevron-down" size={20} color="#000" /> */}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require("../assets/Gunung.jpeg")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Hiking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require("../assets/Gedung.jpeg")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Domestic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigation.navigate("ListTrip")}
          >
            <Image
              source={require("../assets/International.jpeg")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>International</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require("../assets/Maeman.jpeg")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Culinary</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.tripCard}>
          <Image
            source={require("../assets/Jepang.png")}
            style={styles.tripImage}
          />
          <View style={styles.tripContent}>
            <Text style={styles.tripTitle}>Japan Trip - Fuji Mountain</Text>
            <Text style={styles.tripDate}>14 August - 17 August 2024</Text>
            <Text style={styles.tripDescription}>
              Gunung Fuji, sebagai tempat suci yang ikonis di Jepang, telah
              menjadi pusat budaya dalam...
            </Text>
            <TouchableOpacity
              style={styles.seeDetailButton}
              onPress={() => navigation.navigate("TripDetail")}
            >
              <Text style={styles.seeDetailText}>See Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Footer navigation={navigation} activeScreen={"HomePage"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  searchbox: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 40,
  },  
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 24,
    width: "80%",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  notification : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon : {
    flexDirection: "row",
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: "#f5f5f5",
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  promoImage: {
    width: "95%",
    height: "10%",
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 120,
    overflow: "hidden",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  categoryScroll: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryCard: {
    marginRight: 15,
    alignItems: "center",
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  tripCard: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tripImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tripContent: {
    padding: 15,
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tripDate: {
    color: "#666",
    marginBottom: 10,
  },
  tripDescription: {
    color: "#666",
    marginBottom: 15,
  },
  seeDetailButton: {
    backgroundColor: "#00B4D7",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  seeDetailText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
