import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Footer({ navigation, activeScreen }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={activeScreen === "HomePage" ? "#00B4D8" : "#666"}
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
          name="people-outline"
          size={24}
          color={activeScreen === "Community" ? "#00B4D8" : "#666"}
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
        style={styles.navItem}
        onPress={() => navigation.navigate("Trip")}
      >
        <Ionicons
          name="location-outline"
          size={24}
          color={activeScreen === "Trip" ? "#00B4D8" : "#666"}
        />
        <Text
          style={[
            styles.navText,
            activeScreen === "Trip" && styles.activeNavText,
          ]}
        >
          Trip
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Video")}
      >
        <Ionicons
          name="play-outline"
          size={24}
          color={activeScreen === "Video" ? "#00B4D8" : "#666"}
        />
        <Text
          style={[
            styles.navText,
            activeScreen === "Video" && styles.activeNavText,
          ]}
        >
          Video
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color={activeScreen === "Profile" ? "#00B4D8" : "#666"}
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
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#666",
    fontSize: 12,
  },
  activeNavText: {
    color: "#00B4D8",
  },
});
