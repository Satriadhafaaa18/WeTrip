import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from "../Components/Footer";

const SavedTripCard = ({ image, title, date, description }) => (
  <View style={styles.tripCard}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.tripImage} />
    </View>
    <View style={styles.tripContent}>
      <Text style={styles.tripTitle}>{title}</Text>
      <Text style={styles.tripDate}>{date}</Text>
      <Text numberOfLines={2} style={styles.tripDescription}>{description}</Text>
    </View>
  </View>
);

const SettingsItem = ({ title }) => (
  <TouchableOpacity style={styles.settingsItem}>
    <Text style={styles.settingsTitle}>{title}</Text>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mapContainer}>
          <Image 
            source={require('../assets/Peta.png')} 
            style={styles.backgroundImage}
          />
        </View>
        
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Image 
              source={require('../assets/FotoProfil.png')} 
              style={styles.profilePic}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Emily Rose</Text>
              <Text style={styles.username}>@emilyrose</Text>
            </View>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Saved trip</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>View all</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tripsContainer}
            >
              <SavedTripCard
                image={require('../assets/Jepang.png')}
                title="Japan Trip: Fuji Mountain"
                date="14 August - 19 August 2024"
                description="Gunung Fuji, gunung tertinggi dan paling ikonik di Jepang, siap menyambut Anda dalam petualangan yang penuh dengan keindahan alam, pemandangan"
              />
              <SavedTripCard
                image={require('../assets/Korea.jpeg')}
                title="Seoul: Itinerary South Korea Tour 5 Days 4 Nights"
                date="12 August - 17 August 2024"
                description="Korea Selatan adalah tujuan wisata yang paling populer di dunia. Sebelum berangkan ke Nami Ginseng, sangat penting untuk membuat itinerary tour Korea Selatan..."
              />
              <SavedTripCard
                image={require('../assets/Londo.jpeg')}
                title="London Trip: The Big Ben"
                date="23 April - 30 April 2024"
                description="London, ibu kota Inggris, adalah destinasi yang sempurna untuk liburan dengan kombinasi unik antara sejarah, budaya, dan modernitas. Beberapa aktivitas yang wajib dilakukan selama di London..."
              />
            </ScrollView>
          </View>

          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Account settings</Text>
            <View style={styles.settingsWrapper}>
              <View style={styles.settingsItemContainer}>
                <SettingsItem title="Privacy & Security" />
              </View>
              <View style={styles.settingsItemContainer}>
                <SettingsItem title="Language" />
              </View>
              <View style={styles.settingsItemContainer}>
                <SettingsItem title="Notification" />
              </View>
              <View style={styles.settingsItemContainer}>
                <SettingsItem title="Settings" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} activeScreen={"Profile"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    height: 200,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingHorizontal: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 30,
    top: -80,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
    top: -65,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00B4D7',
    backgroundColor: '#fff',
    top: -65,
  },
  editButtonText: {
    fontSize: 14,
    color: '#00B4D7',
  },
  section: {
    marginBottom: 25,
    top: -100,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#666',
  },
  tripsContainer: {
    paddingRight: 20,
    height: 250,
  },
  tripCard: {
    width: 280,
    height: 240,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#00B4D7',

  },
  imageContainer: {
    width: '100s%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  tripImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tripContent: {
    padding: 16,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
    lineHeight: 22,
  },
  tripDate: {
    fontSize: 13,
    color: '#0085CC',
    marginBottom: 6,
  },
  tripDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  settingsSection: {
    marginBottom: 30,
    top: -110,
  },
  settingsWrapper: {
    marginTop: 15,
    gap: 10,
  },
  settingsItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00B4D7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  settingsTitle: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 20,
    color: '#666',
  },
});

export default Profile;