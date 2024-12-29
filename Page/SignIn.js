import React from "react";
import {View,TextInput,TouchableOpacity,Text,Image,StyleSheet,} from "react-native";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
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
        <Text style={styles.title}>Sign In</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={{ color: "white" }}>Or continue with</Text>
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/google.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/facebook.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/apple.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={{ color: "white" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ textDecorationLine: "underline" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 40,
    marginHorizontal: 16,
  },
  backButton: {
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
  title: {
<<<<<<< HEAD
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 50,
=======
    fontSize: 36,
    textAlign: "center",
>>>>>>> d8774be602c23a9b07c6ebdb802e40324aa35c77
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
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  button: {
    backgroundColor: "#003580",
    height: 50,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 20,
    gap: 15,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});
