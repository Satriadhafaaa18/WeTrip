import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,} from 'react-native';

const BookingSummary = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/BgBookingForum.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.Klik}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('BookingForm')}
            style={styles.backButton}
          >
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

        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <Image
              source={require('../assets/LocBooking.png')}
              style={styles.locationIcon}
            />
            <Text style={styles.title}>Japan Trip: Mount Fuji</Text>

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
              {/* Flight Section */}
              <View style={styles.sectionWrapper}>
          <View style={styles.iconLabelContainer}>
            <Image 
              source={require('../assets/Pesawat.png')} 
              style={styles.sectionIconPesawat} 
            />
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.flightDetail}>
              <View style={styles.flightTime}>
                <Text style={styles.timeText}>01:30</Text>
                <Text style={styles.dateText}>CGK</Text>
                <Text style={styles.cityText}>14 Agustus 2024</Text>
              </View>
              <View style={styles.flightDuration}>
                <Text style={styles.durationText}>15 jam 35 menit</Text>
                <View style={styles.flightLine}>
                  <View style={styles.arrow} />
                </View>
                <Text style={styles.transitText}>1 kali transit</Text>
              </View>
              <View style={styles.flightTime}>
                <Text style={styles.timeText}>17:05</Text>
                <Text style={styles.dateText}>HND</Text>
                <Text style={styles.priceText}>Rp 3.956.400</Text>
              </View>
            </View>

            <View style={[styles.flightDetail, styles.marginTop]}>
              <View style={styles.flightTime}>
                <Text style={styles.timeText}>12:10</Text>
                <Text style={styles.dateText}>HND</Text>
                <Text style={styles.cityText}>19 Agustus 2024</Text>
              </View>
              <View style={styles.flightDuration}>
                <Text style={styles.durationText}>10 jam 45 menit</Text>
                <View style={styles.flightLine}>
                  <View style={styles.arrow} />
                </View>
                <Text style={styles.transitText}>1 kali transit</Text>
              </View>
              <View style={styles.flightTime}>
                <Text style={styles.timeText}>22:55</Text>
                <Text style={styles.dateText}>CGK</Text>
                <Text style={styles.priceText}>Rp 4.708.400</Text>
              </View>
            </View>
          </View>
        </View>

              {/* Hotel Section */}
              <View style={styles.sectionWrapper}>
                <Image 
                  source={require('../assets/Hotel.png')} 
                  style={styles.sectionIconHotel} 
                />
                <View style={styles.sectionContainer}>
                  <View style={styles.hotelItem}>
                    <Text style={styles.hotelName}>APA Hotel Higashi Shinjuku Ekimae</Text>
                    <Text style={styles.hotelPrice}>Rp 4.500.000</Text>
                  </View>
                  
                  <View style={[styles.hotelItem, styles.marginTop]}>
                    <Text style={styles.hotelName}>Kawaguchiko Hotel</Text>
                    <Text style={styles.hotelPrice}>Rp 4.962.880</Text>
                  </View>
                </View>
              </View>

              {/* Train Section */}
              <View style={styles.sectionWrapper}>
                <Image 
                  source={require('../assets/Kereta.png')} 
                  style={styles.sectionIconKereta} 
                />
                <View style={styles.sectionContainer}>
                  <View style={styles.trainRoute}>
                    <View style={styles.trainStationWrapper}>
                      <Text style={styles.stationText}>Tokyo</Text>
                      <View style={styles.routeLine} />
                      <Text style={styles.stationText}>Asakusa</Text>
                    </View>
                    <Text style={styles.trainPrice}>Rp 82.000</Text>
                  </View>
                  
                  <View style={[styles.trainRoute, styles.marginTop]}>
                    <View style={styles.trainStationWrapper}>
                      <Text style={styles.stationText}>Tokyo</Text>
                      <View style={styles.routeLine} />
                      <Text style={styles.stationText}>Fujikawaguchiko</Text>
                    </View>
                    <Text style={styles.trainPrice}>Rp 500.000</Text>
                  </View>
                </View>
              </View>

              {/* Bus Section */}
              <View style={styles.sectionWrapper}>
                <Image 
                  source={require('../assets/Bus.png')} 
                  style={styles.sectionIconBis} 
                />
                <View style={styles.sectionContainer}>
                  <View style={styles.busItem}>
                    <Text style={styles.busText}>Bus</Text>
                    <Text style={styles.busPrice}>Rp 625.000</Text>
                  </View>
                </View>
              </View>

              {/* Tour Section */}
              <View style={styles.sectionWrapper}>
                <Image 
                  source={require('../assets/Tour.png')} 
                  style={styles.sectionIconTour} 
                />
                <View style={styles.sectionContainer}>
                  <View style={styles.tourItem}>
                    <Text style={styles.tourText}>• Tokyo SkyTree</Text>
                  </View>
                  <View style={styles.tourItem}>
                    <Text style={styles.tourText}>• Fuji Panoramic Ropeway</Text>
                    <Text style={styles.tourPrice}>Rp 3.986.003</Text>
                  </View>
                  <View style={styles.tourItem}>
                    <Text style={styles.tourText}>• Fujisan World Heritage Center</Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Payment')}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: -2,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '25%',
  },
  Klik: {
    marginTop: 30,
  },
  backButton: {
    padding: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  frameContainer: {
    flex: 1,
    position: 'relative',
  },
  frameImage: {
    position: 'absolute',
    width: '100%',
    height: '200%',
    top: 50,
    left: 0,
  },
  cardWrapper: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00B4D7",
    padding: 20,
    height: '95%',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 10,
  },
  locationIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: -65,
    marginBottom: -20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
    top: 20,
  },
  sectionWrapper: {
    marginBottom: 15,
  },
  iconLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  sectionContainer: {
    backgroundColor: '#F2F1DF',
    borderRadius: 12,
    padding: 16,
  },
  flightDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flightTime: {
    alignItems: 'flex-start',
    flex: 1,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  dateText: {
    fontSize: 12,
    color: '#000000',
    marginTop: 4,
  },
  cityText: {
    fontSize: 12,
    color: '#000000',
    marginTop: 2,
  },
  flightDuration: {
    flex: 2,
    color: '#000000',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 4,
  },
  transitText: {
    fontSize: 12,
    color: '#000000',
    marginTop: 4,
  },
  flightLine: {
    height: 2,
    backgroundColor: '#000000',
    width: '80%',
    position: 'relative',
  },
  arrow: {
    width: 8,
    height: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#000000',
    position: 'absolute',
    right: -4,
    top: -3,
    transform: [{ rotate: '45deg' }],
  },
  priceText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginTop: 4,
  },
  marginTop: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },
  hotelItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  hotelName: {
    fontSize: 14,
    color: '#000000',
    flex: 1,
  },
  hotelPrice: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 10,
  },
  trainRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    color: '#000000',
  },
  trainStationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    color: '#000000',
  },
  stationText: {
    fontSize: 14,
    color: '#333',
    minWidth: 40,
    color: '#000000',
  },
  routeLine: {
    height: 1,
    backgroundColor: '#000000',
    flex: 1,
    marginHorizontal: 8,
  },
  trainPrice: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 16,
  },
  busItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  busText: {
    fontSize: 14,
    color: '#00000',
  },
  busPrice: {
    fontSize: 14,
    color: '#000000',
  },
  tourItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  tourText: {
    fontSize: 14,
    color: '#000000',
  },
  tourPrice: {
    fontSize: 14,
    color: '#00000',
  },
  button: {
    backgroundColor: '#00BCD4',
    borderRadius: 60,
    padding: 13,
    width: 265,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingSummary;