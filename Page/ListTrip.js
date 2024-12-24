import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ListTrip({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#003580" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoryTabs}>
        <TouchableOpacity style={styles.categoryTab}>
          <Text>Hiking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryTab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Domestic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryTab}>
          <Text>International</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryTab}>
          <Text>Culinary</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <TouchableOpacity 
          style={styles.tripCard}
          onPress={() => navigation.navigate('TripDetail')}
        >
          <Image source={require('../assets/Jepang.png')} style={styles.tripImage} />
          <View style={styles.tripContent}>
            <Text style={styles.tripTitle}>Japan Trip - Fuji Mountain</Text>
            <Text style={styles.tripDate}>14 August - 17 August 2024</Text>
            <TouchableOpacity style={styles.seeDetailButton}>
              <Text style={styles.seeDetailText}>See Detail</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tripCard}>
          <Image source={require('../assets/Korea.jpeg')} style={styles.tripImage} />
          <View style={styles.tripContent}>
            <Text style={styles.tripTitle}>Seoul, History in South Korea</Text>
            <Text style={styles.tripDate}>Tour 5 Days 4 Nights</Text>
            <TouchableOpacity style={styles.seeDetailButton}>
              <Text style={styles.seeDetailText}>See Detail</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  categoryTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryTab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  activeTab: {
    backgroundColor: '#003580',
  },
  activeTabText: {
    color: '#fff',
  },
});



