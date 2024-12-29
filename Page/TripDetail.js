import React from "react";
import {View,Text,Image,ScrollView,TouchableOpacity,StyleSheet,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TripDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('ListTrip')}
        >
          <Image
            source={require("../assets/ArrowBack.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headertitle}>Trip Detail</Text>
        </View>
      </View>

      <ScrollView>
        <Image
          source={require("../assets/Jepang.png")}
          style={styles.headerImage}
        />

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Japan Trip : Fuji Mountain</Text>
            <Text style={styles.date}>14 August - 17 August 2024</Text>
          </View>

          <Text style={styles.subtitle}>See trip album</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.albumScroll}
          >
            <Image
              source={require("../assets/Album1.jpeg")}
              style={styles.albumImage}
            />
            <Image
              source={require("../assets/Album2.jpeg")}
              style={styles.albumImage}
            />
            <Image
              source={require("../assets/Album3.jpeg")}
              style={styles.albumImage}
            />
            <Image
              source={require("../assets/Album4.jpeg")}
              style={styles.albumImage}
            />
          </ScrollView>

          <Text style={styles.subtitle}>Trip Timeline</Text>
          <View style={styles.timelineCard}>
            <Text style={styles.timelineDate}>14 August 2024</Text>
            <View style={styles.timelineTextContainer}>
              <View style={styles.dot}></View>
              <Text style={styles.timelineText}>
                Berangkat dari Jakarta (CGK) menuju Tokyo (Haneda International Airport)
              </Text>
            </View>
            <View style={styles.timelineTextContainer}>
              <View style={styles.dot}></View>
              <Text style={styles.timelineText}>
              Tiba di Tokyo sekitar pukul 16.00 waktu setempat
              </Text>
            </View>
            <View style={styles.timelineTextContainer}>
              <View style={styles.dot}></View>
              <Text style={styles.timelineText}>
              Check-in di hotel Tokyo
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bookButton}>
        <Text
          style={styles.bookButtonText}
          onPress={() => navigation.navigate("BookingForm")}
        >
          Book Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  backButton: {
    position: "absolute",
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitleContainer: {
    width: "100%",
    alignContent: "center",
  },
  headertitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  headerImage: {
    width: "100%",
    height: 210,
    borderRadius: 24,
  },
  content: {
    marginTop: 14,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    color: "#1F79CC",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "semibold",
    marginBottom: 15,
  },
  albumScroll: {
    marginBottom: 20,
  },
  albumImage: {
    width: 120,
    height: 67,
    marginRight: 10,
    borderRadius: 10,
  },
  timelineCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 0.2,
  },
  timelineDate: {
    color: "#0078B7",
    fontWeight: "bold",
    marginBottom: 5,
  },
  timelineTextContainer:{
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 10
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginRight: 5,
  },
  timelineText: {
    lineHeight: 18,
    color: "black",
    fontWeight: "bold",
  },
  bookButton: {
    backgroundColor: "#00B4D7",
    padding: 15,
    borderRadius: 24,
    marginBottom: 20,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
