import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const Invoice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Payment')} 
        style={styles.backButton}
      >
        <Image 
          source={require('./assets/PanahKiri.png')} 
          style={styles.backIcon} 
        />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <View style={styles.checkmarkContainer}>
          <Image 
            source={require('./assets/Centang.png')} 
            style={styles.checkmark}
          />
        </View>

        <View style={styles.orderContainer}>
          <Text style={styles.orderTitle}>Order ID</Text>
          <Text style={styles.orderId}>123456789</Text>
        </View>

        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTime}>Sat, 19th July 2024</Text>
          <Text style={styles.time}>9:09 p.m.</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.bookingDetails}>
          <Text style={styles.sectionTitle}>Booking Detail</Text>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Emily Rose</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>(+62) 81555923718</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>emilyrose@gmail.com</Text>
          </View>
        </View>

        <View style={styles.tripContainer}>
          <Text style={styles.tripTitle}>Japan Trip : Mount Fuji</Text>
          <Text style={styles.tripDate}>14 August - 19 August 2024</Text>
          <Text style={styles.tripType}>International</Text>
        </View>

        <ScrollView style={styles.itemsContainer}>
          <View style={styles.itemSection}>
            <Text style={styles.itemTitle}>Tiket Pesawat PP Jakarta - Tokyo</Text>
            <View style={styles.flightRow}>
              <Text>Jakarta ——✈—— Tokyo</Text>
              <Text>Rp 3.956.400</Text>
            </View>
            <View style={styles.flightRow}>
              <Text>Tokyo ——✈—— Jakarta</Text>
              <Text>Rp 4.708.400</Text>
            </View>
          </View>

          {/* Add other sections similarly */}
        </ScrollView>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>Rp 23,320,783</Text>
        </View>

        <TouchableOpacity 
          style={styles.seeDetailButton}
          onPress={() => navigation.navigate('InvoiceDetail')}
        >
          <Text style={styles.seeDetailText}>See Detail</Text>
        </TouchableOpacity>
      </View>
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
      contentContainer: {
        flex: 1,
        padding: 20,
      },
      checkmarkContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      checkmark: {
        width: 60,
        height: 60,
      },
      orderContainer: {
        alignItems: 'center',
        marginBottom: 15,
      },
      dateTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 15,
      },
      seeDetailButton: {
        backgroundColor: '#00BCD4',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
      },
      seeDetailText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
      },
});

export default Invoice ;