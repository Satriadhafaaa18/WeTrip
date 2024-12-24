import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Name"
        />
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
        <TextInput 
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      marginTop: 60,
      marginLeft: 20,
    },
    formContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    input: {
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    button: {
      backgroundColor: '#003580',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    signInContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 'auto',
      marginBottom: 20,
    },
    signInText: {
      color: '#003580',
      fontWeight: '600',
    }
  });