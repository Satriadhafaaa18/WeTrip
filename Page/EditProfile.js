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
  tripCard: {
    width: 250,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tripImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tripContent: {
    padding: 10,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripDate: {
    color: '#666',
    marginVertical: 5,
  },
  tripDescription: {
    color: '#444',
    fontSize: 12,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingsTitle: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 20,
    color: '#666',
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
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  inputLabel: {
    color: '#666',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#00BCD4',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;