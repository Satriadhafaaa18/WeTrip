import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Invoice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
         onPress={() => navigation.navigate('Payment')}
         style={styles.backButton}>
        <Image 
          source={require('../assets/PanahKiri.png')} 
          style={styles.backIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.frameContainer}>
        <Image 
          source={require('../assets/FrameBiru.png')} 
          style={styles.frameImage}
          resizeMode="stretch"
        />

        <View style={styles.card}>
          <View style={styles.checkmarkContainer}>
            <View style={styles.checkmarkCircle}>
              <Image 
                source={require('../assets/Centang.png')}
                
              />
            </View>
          </View>

          <Text style={styles.orderId}>Order ID</Text>
          <Text style={styles.orderNumber}>123456789</Text>

          <View style={styles.dateRow}>
            <Text style={styles.dateText}>Sat, 19th July 2024</Text>
            <Text style={styles.dateText}>9:09 p.m.</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Booking Detail</Text>
            <View style={styles.bookingRow}>
              <View style={styles.bulletPoint} />
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>Emily Rose</Text>
            </View>
            <View style={styles.bookingRow}>
              <View style={styles.bulletPoint} />
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.value}>(+62) 81359923718</Text>
            </View>
            <View style={styles.bookingRow}>
              <View style={styles.bulletPoint} />
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>emilyrose@gmail.com</Text>
            </View>
          </View>

          <View style={styles.tripSection}>
            <View style={styles.tripHeader}>
              <Text style={styles.tripTitle}>Japan Trip : Mount Fuji</Text>
              <Text style={styles.tripType}>International</Text>
            </View>
            <Text style={styles.tripDate}>14 August - 19 August 2024</Text>
          </View>

          <ScrollView style={styles.itemsContainer}>
            <View style={styles.itemRow}>
              <View style={styles.bulletPoint} />
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Tiket Pesawat PP Jakarta - Tokyo</Text>
                <View style={styles.flightDetails}>
                  <Text style={styles.routeText}>Jakarta ——✈—— Tokyo</Text>
                  <Text style={styles.priceText}>Rp 3.956.400</Text>
                </View>
                <View style={styles.flightDetails}>
                  <Text style={styles.routeText}>Tokyo ——✈—— Jakarta</Text>
                  <Text style={styles.priceText}>Rp 4.708.400</Text>
                </View>
              </View>
            </View>

            <View style={styles.itemRow}>
              <View style={styles.bulletPoint} />
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Tiket Kereta PP</Text>
                <View style={styles.flightDetails}>
                  <Text style={styles.routeText}>Tokyo ——🚂—— Asakusa</Text>
                  <Text style={styles.priceText}>Rp 92.000</Text>
                </View>
                <View style={styles.flightDetails}>
                  <Text style={styles.routeText}>Tokyo ——🚂—— Fujikawaguchiko</Text>
                  <Text style={styles.priceText}>Rp 525.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.itemRow}>
              <View style={styles.bulletPoint} />
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Transportasi lainnya</Text>
                <View style={styles.subItem}>
                  <Text style={styles.subItemText}>Bus</Text>
                  <Text style={styles.subItemPrice}>Rp 125.000 X 5 hari</Text>
                  <Text style={styles.totalPrice}>Rp 625.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.itemRow}>
              <View style={styles.bulletPoint} />
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Hotel</Text>
                <View style={styles.subItem}>
                  <Text style={styles.subItemText}>APA Hotel Higashi Shinjuku Ekimae</Text>
                  <Text style={styles.subItemPrice}>Rp 1.500.000 X 3 malam</Text>
                  <Text style={styles.totalPrice}>Rp 4.500.000</Text>
                </View>
                <View style={styles.subItem}>
                  <Text style={styles.subItemText}>Kawaguchiko Hotel</Text>
                  <Text style={styles.subItemPrice}>Rp 2.481.490 X 2 malam</Text>
                  <Text style={styles.totalPrice}>Rp 4.962.980</Text>
                </View>
              </View>
            </View>

            <View style={styles.itemRow}>
              <View style={styles.bulletPoint} />
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Tour</Text>
                <View style={styles.subItem}>
                  <Text style={styles.subItemText}>Tokyo SkyTree</Text>
                  <Text style={styles.totalPrice}>Rp 3.201.000</Text>
                </View>
                <View style={styles.subItem}>
                  <Text style={styles.subItemText}>Fuji Panoramic Ropeway</Text>
                  <Text style={styles.totalPrice}>Rp 750.003</Text>
                </View>
                <View style={styles.subItem}>
                  <Text style={styles.subItemText}>Fujisan World Heritage Center</Text>
                  <Text style={styles.totalPrice}>Rp 35.000</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>Rp 23,320,783</Text>
          </View>

          <TouchableOpacity 
            style={styles.seeDetailButton}
            onPress={() => navigation.navigate('InvoiceDetail')}
          >
            <Text style={styles.buttonText}>See Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: -4,
    paddingBottom: 16,
  },
  backButton: {
    padding: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    top: 30,
    left: -15,
  },
  frameContainer: {
    flex: 1,
    position: 'relative',
    
  },
  frameImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 90,
    left: 0,
  },
  timeText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#00B4D7",
    margin: 16,
    padding: 20,
    zIndex: 1,
  },
  checkmarkContainer: {
      alignItems: 'center',
      marginTop: -52, 
      marginBottom: 16,
  },
  checkmarkCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 32,
    height: 32,
    tintColor: 'white',
  },
  orderId: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  orderNumber: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  bookingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    marginRight: 8,
  },
  label: {
    width: 100,
    fontSize: 14,
  },
  value: {
    flex: 1,
    fontSize: 14,
  },
  tripSection: {
    marginBottom: 16,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  tripType: {
    fontSize: 12,
    color: '#666',
  },
  tripDate: {
    fontSize: 14,
    color: '#1F79CC',
    marginTop: 4,
  },
  itemsContainer: {
    flex: 1,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  routeText: {
    fontSize: 14,
  },
  priceText: {
    fontSize: 14,
  },
  subItem: {
    marginBottom: 4,
  },
  subItemText: {
    fontSize: 14,
  },
  subItemPrice: {
    fontSize: 14,
    color: '#666',
  },
  totalPrice: {
    fontSize: 14,
    textAlign: 'right',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeDetailButton: {
    backgroundColor: '#00B4D7',
    padding: 15,
    borderRadius: 24,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Invoice;