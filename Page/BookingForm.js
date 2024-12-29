import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,Modal,} from 'react-native';

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

  const [showDepartureModal, setShowDepartureModal] = useState(false);
  const [showDestinationModal, setShowDestinationModal] = useState(false);

  const airports = [
    'Soekarno-Hatta International Airport',
    'Haneda International Airport',
    'Incheon International Airport',
    'Jendral Ahmad Yani International Airport'
  ];

  return (
    <ImageBackground
      source={require('../assets/BgBookingForum.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.Klik}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('TripDetail')}
          style={styles.backButton}>
          <Image 
            source={require('../assets/PanahKiri.png')} 
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
          
      <View style={styles.frameContainer}>
        <Image 
          source={require('../assets/FrameBiru.png')} 
          style={styles.frameImage}
          resizeMode="stretch"
        />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../assets/LocBooking.png')}
            style={styles.locationIcon}
         />
         <Text style={styles.title}>Japan Trip: Mount Fuji</Text>
            
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholderTextColor="#999"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Passport Number</Text>
            <TextInput
              style={styles.input}
              value={formData.passportNumber}
              onChangeText={(text) => setFormData({ ...formData, passportNumber: text })}
              placeholderTextColor="#999"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>VISA Number</Text>
            <TextInput
              style={styles.input}
              value={formData.visaNumber}
              onChangeText={(text) => setFormData({ ...formData, visaNumber: text })}
              placeholderTextColor="#999"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Birth of Date</Text>
            <View style={styles.dateInputWrapper}>
              <TextInput
                style={styles.input}
                value={formData.birthDate}
                onChangeText={(text) => setFormData({ ...formData, birthDate: text })}
                placeholderTextColor="#999"
              />
              <Image
                source={require('../assets/calender.png')}
                style={styles.calendarIcon}
              />
            </View>
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              placeholderTextColor="#999"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholderTextColor="#999"
            />
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.subtitle}>Select Your Departure</Text>
          
          <View style={styles.departureSection}>
            <TouchableOpacity 
              style={styles.departureSelector}
              onPress={() => setShowDepartureModal(true)}
            >
              <Image
                source={require('../assets/departure.png')}
                style={styles.departureIcon}
              />
              <Text style={styles.departureSelectorText}>
                {formData.departure || 'From'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.departureSection}>
            <TouchableOpacity 
              style={styles.departureSelector}
              onPress={() => setShowDestinationModal(true)}
            >
              <Image
                source={require('../assets/Landing.png')}
                style={styles.departureIcon}
              />
              <Text style={styles.departureSelectorText}>
                {formData.destination || 'To'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BookingSummary')}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      
      <Modal
        visible={showDepartureModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Departure Airport</Text>
            {airports.map((airport, index) => (
              <TouchableOpacity
                key={index}
                style={styles.airportOption}
                onPress={() => {
                  setFormData({ ...formData, departure: airport });
                  setShowDepartureModal(false);
                }}
              >
                <Text style={styles.airportOptionText}>{airport}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowDepartureModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showDestinationModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Destination Airport</Text>
            {airports.map((airport, index) => (
              <TouchableOpacity
                key={index}
                style={styles.airportOption}
                onPress={() => {
                  setFormData({ ...formData, destination: airport });
                  setShowDestinationModal(false);
                }}
              >
                <Text style={styles.airportOptionText}>{airport}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowDestinationModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '25%',
  },
  backButton: {
    padding: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    top: 30,
    left: 15,
  },
  frameContainer: {
    flex: 1,
    position: 'relative',
  },
  frameImage: {
    position: 'absolute',
    width: '100%',
    height: '200%',
    top: 110,
    left: 0,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: -780,
    marginBottom: 5,
  },
  card: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    width: 370,
    borderColor: "#00B4D7",
    padding: 20,
    top: 25,
    elevation: 5,
  },
  locationIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: -85,
    top: -65,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 5,
    
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#F5F5F5',
    fontSize: 14,
  },
  dateInputWrapper: {
    position: 'relative',
  },
  calendarIcon: {
    position: 'absolute',
    right: 15,
    top: 5,
    width: 24,
    height: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  departureSection: {
    marginBottom: 15,
  },
  departureSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10,
  },
  departureIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  departureSelectorText: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#00BCD4',
    borderRadius: 60,
    padding: 13,
    width: 265,
    alignItems: 'center',
    marginTop: 20,
    left: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  airportOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  airportOptionText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingForm;