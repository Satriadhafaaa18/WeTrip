import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../Components/Footer";

const TripCard = ({ image, title, status, onReviewPress }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.cardFooter}>
          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>Status: </Text>
            <Text
              style={[
                styles.statusValue,
                { color: status === "Active" ? "#2ED30D" : "#007AFF" },
              ]}
            >
              {status}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Trip Detail</Text>
            </TouchableOpacity>
            {status === "Completed" && (
              <TouchableOpacity
                style={[styles.button, styles.reviewButton]}
                onPress={onReviewPress}
              >
                <Text style={styles.buttonText}>Review</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const Trip = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("active");

  const trips = {
    active: [
      {
        id: 1,
        title: "Japan Trip : Fuji Mountain",
        image: require("../assets/JepangTrip.png"),
        status: "Active",
      },
    ],
    completed: [
      {
        id: 2,
        title: "London Trip : The Big Beng",
        image: require("../assets/LondonTrip.png"),
        status: "Completed",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "active" && styles.activeTab]}
          onPress={() => setActiveTab("active")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "active" && styles.activeTabText,
            ]}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "completed" && styles.activeTab]}
          onPress={() => setActiveTab("completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "completed" && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {(activeTab === "active" ? trips.active : trips.completed).map(
          (trip) => (
            <TripCard
              key={trip.id}
              {...trip}
              onReviewPress={() => navigation.navigate("Review", { trip })}
            />
          )
        )}
      </ScrollView>
      <Footer navigation={navigation} activeScreen={"Trip"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    top: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 25,
    top: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },
  tabText: {
    fontSize: 18,
    color: "#666",
  },
  activeTabText: {
    color: "#007AFF",
    fontWeight: "500",
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    top: 25,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusLabel: {
    color: "#666",
  },
  statusValue: {
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 10,
  },
  reviewButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#000",
  },
});

export default Trip;
