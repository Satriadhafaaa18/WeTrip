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
import { Dropdown } from "react-native-element-dropdown";

export default function Homepage({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("semarang");
  const items = [
    { label: "Bogor", value: "bogor" },
    { label: "Jakarta", value: "jakarta" },
    { label: "Bandung", value: "bandung" },
    { label: "Semarang", value: "semarang" },
    { label: "Surabaya", value: "surabaya" },
    { label: "Kendari", value: "kendari" },
  ];

  const categories = [
    { assets: require("../assets/Gunung.jpeg"), name: "Gunung" },
    { assets: require("../assets/Gedung.jpeg"), name: "Domestic" },
    { assets: require("../assets/International.jpeg"), name: "International" },
    { assets: require("../assets/Maeman.jpeg"), name: "Culinary" },
  ];

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.promoContainer}>
          <Image
            source={require("../assets/PromoLiburan.jpeg")}
            style={styles.promoImage}
          />
        </View>

        <View style={styles.locationContainer}>
          <Dropdown
            style={[styles.dropdown]}
            data={items}
            labelField="label"
            valueField="value"
            placeholder="Pilih kota"
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {categories.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.categoryCard}
                key={index}
                onPress={
                  item.name == "International"
                    ? () => navigation.navigate("ListTrip")
                    : null
                }
              >
                <Image source={item.assets} style={styles.categoryImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>You might like</Text>
        </View>

        <View style={styles.tripCard}>
          <Image
            source={require("../assets/Jepang.png")}
            style={styles.tripImage}
          />
          <View style={styles.tripContent}>
            <Text style={styles.tripTitle}>Japan Trip - Fuji Mountain</Text>
            <Text style={styles.tripDate}>14 August - 17 August 2024</Text>
            <Text style={styles.tripDescription}>
              Gunung Fuji, gunung tertinggi dan paling ikonik di Jepang, siap
              menyambut Anda dalam petualangan yang penuh dengan keindahan alam,
              pemandangan spektakuler, dan pengalaman mendalam.......
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
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 16,
  },
  searchContainer: {
    width: "86%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  notification: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationIcon: {
    flexDirection: "row",
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  promoContainer: {
    marginTop: 20,
    marginHorizontal: 16,
    height: 175,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "red",
  },
  promoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  locationContainer: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  categoryScroll: {
    marginHorizontal: 16,
    marginTop: 20,
    // backgroundColor: "red"
  },
  categoryCard: {
    marginRight: 20,
    height: 105,
    alignItems: "center",
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "#00B4D7",
    borderWidth: 0.5,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    top: 60,
    height: 30,
    width: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00B4D7",
    borderRadius: 60 / 2,
  },
  categoryText: {
    fontSize: 12,
    color: "white",
  },
  subHeader: {
    marginHorizontal: 16,
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tripCard: {
    marginVertical: 14,
    marginHorizontal: 16,
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
    color: "#1F79CC",
    fontWeight: "bold",
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
  dropdown: {
    height: 56,
    borderRadius: 24,
    paddingHorizontal: 18,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 2,
  },
});
