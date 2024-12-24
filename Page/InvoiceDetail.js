import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const InvoiceDetail = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Flights');
    const tabs = ['Flights', 'Train', 'Bus', 'Hotel', 'Tour'];
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Invoice')}
            style={styles.backButton}
          >
            <Image 
              source={require('./assets/PanahKiri.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Invoice</Text>
        </View>
  
        <View style={styles.billingInfo}>
          <View style={styles.billingRow}>
            <Text>Billing to: Emily Rose</Text>
            <Text>Passport Number: A1234567</Text>
          </View>
          <View style={styles.billingRow}>
            <Text>Visa Number: V0023159</Text>
            <Text>Date: 19/07/2024</Text>
          </View>
        </View>
  
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
  
        <ScrollView style={styles.flightCards}>
          <View style={styles.flightCard}>
            <View style={styles.airlineHeader}>
              <Image 
                source={require('./assets/JapanAirline.png')} 
                style={styles.airlineIcon}
              />
              <Text style={styles.airlineName}>Japan Airlines</Text>
              <Text style={styles.flightPrice}>Rp 3.956.400</Text>
            </View>
            <View style={styles.flightDetails}>
              <Text>01:30</Text>
              <View style={styles.flightPath} />
              <Text>17:05</Text>
            </View>
          </View>
  
          <View style={styles.flightCard}>
            <View style={styles.airlineHeader}>
              <Image 
                source={require('./assets/AirAsia.png')} 
                style={styles.airlineIcon}
              />
              <Text style={styles.airlineName}>AirAsia Indonesia + HK Express</Text>
              <Text style={styles.flightPrice}>Rp 4.708.400</Text>
            </View>
            <View style={styles.flightDetails}>
              <Text>12:10</Text>
              <View style={styles.flightPath} />
              <Text>22:55</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    backButton: {
      padding: 16,
    },
    backIcon: {
      width: 24,
      height: 24,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 16,
    },
    tabsContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      paddingVertical: 10,
    },
    tab: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      marginHorizontal: 5,
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: '#00BCD4',
    },
    flightCards: {
      padding: 16,
    },
    flightCard: {
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      elevation: 2,
    },

});

export default InvoiceDetail ;