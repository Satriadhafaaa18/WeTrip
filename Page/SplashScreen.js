import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} style={styles.logo} />
      <Text style={styles.title}>Your adventure begins here.</Text>
      <Text style={styles.title}>Let's travel together!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Bumi.jpeg")}
          style={styles.earthImage}
        />
        <Image
          source={require("../assets/OrangInjekBumi.png")}
          style={styles.peopleImage}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    marginTop: 20,
    marginBottom: 70,
    width: 60,
    height: 60,
  },
  earthImage: {
    width: "180%",
    height: "180%",
    top: 200,
    position: "absolute",
    zIndex: 0,
  },
  peopleImage: {
    width: 300,
    height: 300,
    top: 50,
    position: "absolute",
    zIndex: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    width: "50%",
    paddingHorizontal: 20,
    marginBottom: 100,
    gap: 15,
  },
  button: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  secondaryButton: {
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#003580",
  },
});
