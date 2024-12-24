import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
        />
        <TouchableOpacity>
          <Image source={require('../assets/Profile.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../assets/PromoLiburan.jpeg')} style={styles.promoImage} />
        
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Semarang</Text>
          <Ionicons name="chevron-down" size={20} color="#000" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={require('../assets/Gunung.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Hiking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={require('../assets/Gedung.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Domestic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('ListTrip')}>
            <Image source={require('../assets/International.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>International</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={require('../assets/Maeman.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Culinary</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.tripCard}>
          <Image source={require('../assets/Jepang.png')} style={styles.tripImage} />
          <View style={styles.tripContent}>
            <Text style={styles.tripTitle}>Japan Trip - Fuji Mountain</Text>
            <Text style={styles.tripDate}>14 August - 17 August 2024</Text>
            <Text style={styles.tripDescription}>Gunung Fuji, sebagai tempat suci yang ikonis di Jepang, telah menjadi pusat budaya dalam...</Text>
            <TouchableOpacity 
              style={styles.seeDetailButton}
              onPress={() => navigation.navigate('TripDetail')}
            >
              <Text style={styles.seeDetailText}>See Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#003580" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={24} color="#666" />
          <Text style={styles.navText}>Program</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="location" size={24} color="#666" />
          <Text style={styles.navText}>Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="play" size={24} color="#666" />
          <Text style={styles.navText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#f5f5f5',
      marginHorizontal: 20,
      marginTop: 20,
      borderRadius: 10,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    promoImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      marginTop: 20,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
    },
    locationText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 5,
    },
    categoryScroll: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    categoryCard: {
      marginRight: 15,
      alignItems: 'center',
    },
    categoryImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    categoryText: {
      marginTop: 5,
      fontSize: 14,
    },
    tripCard: {
      margin: 20,
      backgroundColor: '#fff',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    tripImage: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    tripContent: {
      padding: 15,
    },
    tripTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    tripDate: {
      color: '#666',
      marginBottom: 10,
    },
    tripDescription: {
      color: '#666',
      marginBottom: 15,
    },
    seeDetailButton: {
      backgroundColor: '#003580',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    seeDetailText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    navItem: {
      alignItems: 'center',
    },
    navText: {
      fontSize: 12,
      marginTop: 5,
      color: '#666',
    },
});