import React from "react";
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

const trip = [
  {
    asset: require("../assets/Jepang.png"),
    title: "Japan Trip : Fuji Mountain",
    date: "14 August - 19 August 2024",
    description: `Gunung Fuji, gunung tertinggi dan paling ikonik di Jepang, siap menyambut Anda dalam petualangan yang penuh dengan keindahan alam, pemandangan spektakuler, dan pengalaman mendalam.......`,
  },
  {
    asset: require("../assets/Korea.jpeg"),
    title: `Seoul, History in South Korea 
Tour 5 Days 4 Nights`,
    date: "12 August - 17 August 2024",
    description: `Korea Selatan adalah salah satu tujuan liburan paling populer di dunia. Sebelum bepergian ke Negeri Gingseng, sangat penting untuk membuat itinerary tour Korea Selatan. Itinerary adalah rencana ............`,
  },
];

export default function ListTrip({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search community"
            placeholderTextColor="gray"
          />
          <Ionicons name="search" size={20} color="gray" />
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={20} color="#00B4D8" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Choose Your Trip</Text>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Hiking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Domestic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, styles.activeCategory]}
          >
            <Text style={[styles.categoryText, styles.activeCategoryText]}>
              International
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Culinary</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {trip.map((item, index) => {
          return (
            <View style={styles.tripCard} key={index}>
              <Image source={item.asset} style={styles.tripImage} />
              <View style={styles.tripContent}>
                <Text style={styles.tripTitle}>{item.title}</Text>
                <Text style={styles.tripDate}>{item.date}</Text>
                <Text style={styles.tripDescription}>{item.description}</Text>
                <TouchableOpacity
                  style={styles.seeDetailButton}
                  onPress={item.title.match("Japan") ? () => navigation.navigate("TripDetail") : null}
                >
                  <Text style={styles.seeDetailText}>See Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Footer navigation={navigation} activeScreen={""} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 40,
  },
  searchBox: {
    flexDirection: "row",
    marginHorizontal: 16,
    alignItems: "baseline",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: 20,
  },
  searchContainer: {
    width: "92%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    // Android shadow
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  categoryButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
    padding: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#00B4D8",
  },
  activeCategory: {
    backgroundColor: "#00B4D8",
  },
  categoryText: {
    fontSize: 16,
    color: "#00B4D8",
    fontWeight: "bold",
  },
  activeCategoryText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  categoryScroll: {
    backgroundColor: "#AEE8F4",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tripContainer: {
    margin: 16,
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
});
