import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Background.png")}
        style={styles.background}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Image
        source={require("../assets/Background.png")}
        style={styles.background}
      />
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
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Create your new account</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={{ color: "white", textAlign: "center" }}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ textDecorationLine: "underline" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    position: "absolute",
    zIndex: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    marginHorizontal: 16,
  },
  formContainer: {
    marginTop: 350,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    background: {
      position: "absolute",
      zIndex: 0,
    },
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#003580",
    height: 50,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
});
