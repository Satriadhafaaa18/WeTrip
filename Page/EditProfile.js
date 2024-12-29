import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const EditProfile = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/Peta.png')} 
          style={styles.backgroundImage}
        />

              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile')} 
                style={styles.backButton}
              >
                <Image 
                  source={require('../assets/PanahKiri.png')} 
                  style={styles.backIcon} 
                />
              </TouchableOpacity>

        <View style={styles.editProfileContainer}>
          <Image 
            source={require('../assets/FotoProfil.png')} 
            style={styles.editProfilePic}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput 
              style={styles.input}
              placeholder="Name"
            />
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput 
              style={styles.input}
              placeholder="Username"
            />
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput 
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
            <Text style={styles.inputLabel}>Phone number</Text>
            <TextInput 
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
            <Text style={styles.inputLabel}>Birth of date</Text>
            <TextInput 
              style={styles.input}
              placeholder="Birth of Date"
              keyboardType="DD/MM/YYYY"
            />
          </View>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },  
    backgroundImage: {
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
  },
  editProfileContainer: {
    marginTop: 150,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  editProfilePic: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
    top: -90,
  },
  inputContainer: {
    width: '100%',
    top: -90,
    
  },
  inputLabel: {
    color: '#666',
    marginBottom: 5,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#00BCD4',
    borderWidth: 1,
    borderRadius: 50,
    padding: 12,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#00BCD4',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20,
    top: -95,
    left: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backIcon: {
    top: 40,
    left: 20,
},
});

export default EditProfile;