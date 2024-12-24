import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';


const BookingSummary = ({ navigation }) => {
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

          {/* Flight Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Image 
                source={require('../assets/Pesawat.png')} 
                style={styles.sectionIcon} 
              />
              <Text style={styles.sectionTitle}>Pesawat</Text>
            </View>
            
            <View style={styles.flightRow}>
              <View>
                <Text style={styles.flightTime}>01:30</Text>
                <Text style={styles.flightDate}>14 Agustus 2024</Text>
              </View>
              <View style={styles.flightRoute}>
                <Text>15 jam 35 menit</Text>
              </View>
              <View>
                <Text style={styles.flightTime}>17:05</Text>
                <Text style={styles.flightPrice}>Rp 3.956.400</Text>
              </View>
            </View>

            <View style={styles.flightRow}>
              <View>
                <Text style={styles.flightTime}>12:10</Text>
                <Text style={styles.flightDate}>19 Agustus 2024</Text>
              </View>
              <View style={styles.flightRoute}>
                <Text>10 jam 45 menit</Text>
              </View>
              <View>
                <Text style={styles.flightTime}>22:55</Text>
                <Text style={styles.flightPrice}>Rp 4.708.400</Text>
              </View>
            </View>
          </View>

          {/* Hotel Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Image 
                source={require('../assets/Hotel.png')} 
                style={styles.sectionIcon} 
              />
              <Text style={styles.sectionTitle}>Hotel</Text>
            </View>
            
            <View style={styles.hotelItem}>
              <Text style={styles.hotelName}>APA Hotel Higashi Shinjuku Ekimae</Text>
              <Text style={styles.hotelPrice}>Rp 4.500.000</Text>
            </View>
            
            <View style={styles.hotelItem}>
              <Text style={styles.hotelName}>Kawaguchiko Hotel</Text>
              <Text style={styles.hotelPrice}>Rp 4.962.880</Text>
            </View>
          </View>

          {/* Train Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Image 
                source={require('../assets/Kereta.png')} 
                style={styles.sectionIcon} 
              />
              <Text style={styles.sectionTitle}>Kereta</Text>
            </View>
            
            <View style={styles.trainRoute}>
              <Text style={styles.destination}>Tokyo</Text>
              <Text style={styles.destination}>Asakusa</Text>
              <Text style={styles.flightPrice}>Rp 82.000</Text>
            </View>
            
            <View style={styles.trainRoute}>
              <Text style={styles.destination}>Tokyo</Text>
              <Text style={styles.destination}>Fujikawaguchiko</Text>
              <Text style={styles.flightPrice}>Rp 500.000</Text>
            </View>
          </View>

          {/* Bus Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Image 
                source={require('../assets/Bus.png')} 
                style={styles.sectionIcon} 
              />
              <Text style={styles.sectionTitle}>Bus</Text>
            </View>
            
            <View style={styles.trainRoute}>
              <Text style={styles.destination}>Bus</Text>
              <Text style={styles.flightPrice}>Rp 625.000</Text>
            </View>
          </View>

          {/* Tour & Destination Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Image 
                source={require('../assets/Tour.png')} 
                style={styles.sectionIcon} 
              />
              <Text style={styles.sectionTitle}>Tour & Destinasi</Text>
            </View>
            
            <View style={styles.tourItem}>
              <Text style={styles.destination}>• Tokyo SkyTree</Text>
            </View>
            <View style={styles.tourItem}>
              <Text style={styles.destination}>• Fuji Panoramic Ropeway</Text>
              <Text style={styles.flightPrice}>Rp 3.986.003</Text>
            </View>
            <View style={styles.tourItem}>
              <Text style={styles.destination}>• Fujisan World Heritage Center</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Payment')}
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
    sectionContainer: {
      marginVertical: 10,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      padding: 15,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    sectionIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0288D1',
    },
    flightRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
    flightTime: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    flightDate: {
      fontSize: 12,
      color: '#666',
    },
    flightRoute: {
      flex: 1,
      alignItems: 'center',
    },
    flightPrice: {
      fontSize: 14,
      textAlign: 'right',
    },
    hotelItem: {
      marginVertical: 5,
    },
    hotelName: {
      fontSize: 14,
    },
    hotelPrice: {
      fontSize: 14,
      textAlign: 'right',
      marginTop: 5,
    },
    trainRoute: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
    destination: {
      fontSize: 14,
    },
    tourItem: {
      marginVertical: 5,
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

export default BookingSummary;