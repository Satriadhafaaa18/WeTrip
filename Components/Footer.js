import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Footer({ navigation, activeScreen }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Ionicons
          name="home"
          size={24}
          color={activeScreen === "HomePage" ? "#00B4D8" : "#C0C0C0"}
        />
        <Text
          style={[
            styles.navText,
            activeScreen === "HomePage" && styles.activeNavText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Community")}
      >
        <Ionicons
          name="people"
          size={24}
          color={activeScreen === "Community" ? "#00B4D8" : "#C0C0C0"}
        />
        <Text
          style={[
            styles.navText,
            activeScreen === "Community" && styles.activeNavText,
          ]}
        >
          Community
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItemTrip}
        onPress={() => navigation.navigate("Trip")}
      >
        <Image
        source={require('../assets/LocBooking.png')}
        style={styles.locationIcon}
        />
        <Text
          style={[
            styles.navTextTrip,
            activeScreen === "Trip" && styles.activeNavText,
          ]}
        >
          Trip
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Thread")}
      >
        <Ionicons
          name="play"
          size={24}
          color={activeScreen === "Thread" ? "#00B4D8" : "#C0C0C0"}
        />
        <Text
          style={[
            styles.navText,
            activeScreen === "Thread" && styles.activeNavText,
          ]}
        >
          Thread
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons
          name="person"
          size={24}
          color={activeScreen === "Profile" ? "#00B4D8" : "#C0C0C0"}
        />
        <Text
          style={[
            styles.navText,
            activeScreen === "Profile" && styles.activeNavText,
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  locationIcon: {
    width: 80,
    height: 80,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "semibold",
    marginBottom: 2,
  },
  navTextTrip: {
    color: "#666",
    fontSize: 12,
    fontWeight: "semibold",
    marginBottom: 2,
    top: -5,
  },
  activeNavText: {
    color: "#00B4D8",
  },
  navItemTrip: {
    alignItems: "center",
    position: "relative",
    top: -25,
    marginBottom: -10,
    height: 80,
    width: 80,
    borderRadius: 100/2,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
