import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SavedTripCard = ({ image, title, date, description }) => (
  <View style={styles.tripCard}>
    <Image source={image} style={styles.tripImage} />
    <View style={styles.tripContent}>
      <Text style={styles.tripTitle}>{title}</Text>
      <Text style={styles.tripDate}>{date}</Text>
      <Text style={styles.tripDescription}>{description}</Text>
    </View>
  </View>
);

const SettingsItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    <Text style={styles.settingsTitle}>{title}</Text>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../assets/Peta.png')} 
        style={styles.backgroundImage}
      />
      <View style={styles.profileContainer}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../assets/FotoProfil.png')} 
            style={styles.profilePic}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Emily Rose</Text>
            <Text style={styles.userEmail}>emilyrozee@gmail.com</Text>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Saved trip</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SavedTripCard
            image={require('../assets/JepangProfile.png')}
            title="Japan Trip"
            date="Fall Mountain"
            description="Beautiful journey through Japan's..."
          />
          <SavedTripCard
            image={require('../assets/KoreaProfile.png')}
            title="Korea Discovery"
            date="Seoul Itinerary"
            description="Exploring the streets of Seoul..."
          />
          <SavedTripCard
            image={require('../assets/LondonProfile.png')}
            title="London Trip"
            date="Big Ben Tour"
            description="Historical tour in London..."
          />
        </ScrollView>

        <Text style={styles.sectionTitle}>Account settings</Text>
        <SettingsItem title="Privacy & Security" />
        <SettingsItem title="Language" />
        <SettingsItem title="Notification" />
        <SettingsItem title="Settings" />
      </View>
    </ScrollView>
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
    profileContainer: {
      marginTop: 150,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: '#fff',
      padding: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    profilePic: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    userInfo: {
      flex: 1,
      marginLeft: 15,
    },
    userName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    userEmail: {
      color: '#666',
    },
    editButton: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    editButtonText: {
      color: '#000',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 15,
    },
});
   

export default Profile;