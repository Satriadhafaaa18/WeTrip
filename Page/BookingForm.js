import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

const BookingForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    passportNumber: '',
    visaNumber: '',
    birthDate: '',
    phone: '',
    email: '',
    departure: '',
    destination: '',
  });

  return (
    <ImageBackground
      source={require('../assets/BgBookingForum.png')}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../assets/LocBooking.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.title}>Japan Trip: Mount Fuji</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Passport Number"
            value={formData.passportNumber}
            onChangeText={(text) => setFormData({ ...formData, passportNumber: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Visa Number"
            value={formData.visaNumber}
            onChangeText={(text) => setFormData({ ...formData, visaNumber: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Birth Date"
            value={formData.birthDate}
            onChangeText={(text) => setFormData({ ...formData, birthDate: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
          
          <View style={styles.divider} />
          
          <Text style={styles.subtitle}>Select Your Departure</Text>
          
          <TextInput
            style={styles.input}
            placeholder="From"
            value={formData.departure}
            onChangeText={(text) => setFormData({ ...formData, departure: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="To"
            value={formData.destination}
            onChangeText={(text) => setFormData({ ...formData, destination: text })}
          />
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BookingSummary')}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      padding: 20,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      marginTop: 20,
      elevation: 5,
    },
    locationIcon: {
      width: 40,
      height: 40,
      alignSelf: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
    },
    divider: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: 20,
    },
    button: {
      backgroundColor: '#00BCD4',
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });

  export default BookingForm;