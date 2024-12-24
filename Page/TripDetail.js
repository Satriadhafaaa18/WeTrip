import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TripDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image source={require('../assets/ArrowBack.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <ScrollView>
        <Image source={require('../assets/Jepang.png')} style={styles.headerImage} />
        
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Japan Trip - Fuji Mountain</Text>
            <Text style={styles.date}>14 August - 17 August 2024</Text>
          </View>

          <Text style={styles.subtitle}>See trip album</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albumScroll}>
            <Image source={require('../assets/Album1.jpeg')} style={styles.albumImage} />
            <Image source={require('../assets/Album2.jpeg')} style={styles.albumImage} />
            <Image source={require('../assets/Album3.jpeg')} style={styles.albumImage} />
            <Image source={require('../assets/Album4.jpeg')} style={styles.albumImage} />
          </ScrollView>

          <View style={styles.timelineCard}>
            <Text style={styles.timelineTitle}>Trip Timeline</Text>
            <Text style={styles.timelineDate}>14 August 2024</Text>
            <Text style={styles.timelineText}>• Berangkat dari Jakarta (CGK) menuju Tokyo (Haneda International Airport)</Text>
            {/* Add more timeline items */}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}
        onPress={() => navigation.navigate("BookingForm")}>Book Trip</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#666',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  albumScroll: {
    marginBottom: 20,
  },
  albumImage: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
  },
  timelineCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timelineDate: {
    color: '#003580',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timelineText: {
    color: '#666',
    marginBottom: 5,
  },
  bookButton: {
    backgroundColor: '#003580',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});