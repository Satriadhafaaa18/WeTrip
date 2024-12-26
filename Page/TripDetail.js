import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TripDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
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

      <ScrollView showsVerticalScrollIndicator={false}>
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

            <View style={styles.listContainer}>
              <View style={styles.timelineTextContainer}>
                <View style={styles.dot}></View>
                <Text style={styles.timelineText}>
                  Berangkat dari Jakarta (CGK) menuju Tokyo (Haneda
                  International Airport)
                </Text>
              </View>
              <View style={styles.timelineSubTextContainer}>
                <View style={styles.miniDot}></View>
                <Text style={styles.timelineSubText}>
                  Durasi penerbangan sekitar 7 jam
                </Text>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View style={styles.timelineTextContainer}>
                <View style={styles.dot}></View>
                <Text style={styles.timelineText}>
                  Tiba di Tokyo sekitar pukul 16.00 waktu setempat
                </Text>
              </View>
              <View style={styles.timelineSubTextContainer}>
                <View style={styles.miniDot}></View>
                <Text style={styles.timelineSubText}>
                  Proses imigrasi dan pengambilan bagasi
                </Text>
              </View>
              <View style={styles.timelineSubTextContainer}>
                <View style={styles.miniDot}></View>
                <Text style={styles.timelineSubText}>
                  Naik kereta Narita Express menuju Tokyo Station (60 menit)
                </Text>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View style={styles.timelineTextContainer}>
                <View style={styles.dot}></View>
                <Text style={styles.timelineText}>Check-in di hotel Tokyo</Text>
              </View>
              <View style={styles.timelineSubTextContainer}>
                <View style={styles.miniDot}></View>
                <Text style={styles.timelineSubText}>Dinner</Text>
              </View>
              <View style={styles.timelineSubTextContainer}>
                <View style={styles.miniDot}></View>
                <Text style={styles.timelineSubText}>
                  Istirahat / free time
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.subtitle}>Contact Us</Text>
          <View style={styles.contactContainer}>
            <View style={styles.buttonContainer}>
              <Ionicons name="people" size={20} color={"#0078B7"} style={{marginRight: 3}}/>
              <Text style={styles.buttonTitle}>Customer Service</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Ionicons name="chatbubble" size={20} color={"#0078B7"} style={{marginRight: 3}}/>
              <Text style={styles.buttonTitle}>Chat Japan Trip Club</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Ionicons name="mail" size={20} color={"#0078B7"} style={{marginRight: 3}}/>
              <Text style={styles.buttonTitle}>wetrip@gmail.com</Text>
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
  listContainer: {
    marginBottom: 10,
  },
  timelineTextContainer: {
    flexDirection: "row",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    marginRight: 4,
    marginTop: 5,
  },
  timelineText: {
    lineHeight: 18,
    color: "black",
    fontWeight: "bold",
  },
  timelineSubTextContainer: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    // backgroundColor: "red"
  },
  miniDot: {
    width: 3,
    height: 3,
    borderRadius: 3 / 2,
    backgroundColor: "black",
    marginRight: 4,
  },
  timelineSubText: {
    fontSize: 10,
    color: "black",
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 120,
    borderRadius: 8,
    marginRight: 5,
    flexShrink: 1,
    padding: 1,
    borderWidth: 0.1
  },
  buttonTitle: {
    fontSize: 9,
    lineHeight: 10
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
