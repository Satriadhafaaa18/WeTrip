import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

const Payment = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const subtotal = 14188226;
  const taxes = 25000;
  const total = subtotal + taxes;

  return (
    <ImageBackground
      source={require('../assets/BgPayment.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../assets/LocBooking.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.title}>Japan Trip: Mount Fuji</Text>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Subtotal</Text>
            <Text style={styles.priceValue}>Rp {subtotal.toLocaleString()}</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Taxes</Text>
            <Text style={styles.priceValue}>Rp {taxes.toLocaleString()}</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Total</Text>
            <Text style={styles.priceValue}>Rp {total.toLocaleString()}</Text>
          </View>

          <Text style={styles.subtitle}>Payment Methods</Text>

          <View style={styles.paymentMethods}>
            <TouchableOpacity
              style={[
                styles.paymentCard,
                selectedMethod === 'card' && styles.selectedPayment,
              ]}
              onPress={() => setSelectedMethod('card')}
            >
              <Image source={require('../assets/Card.png')} style={styles.paymentIcon} />
              <Text>Card</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.paymentCard,
                selectedMethod === 'ewallet' && styles.selectedPayment,
              ]}
              onPress={() => setSelectedMethod('ewallet')}
            >
              <Image source={require('../assets/E-Wallet.png')} style={styles.paymentIcon} />
              <Text>E-Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.paymentCard,
                selectedMethod === 'bank' && styles.selectedPayment,
              ]}
              onPress={() => setSelectedMethod('bank')}
            >
              <Image source={require('../assets/Bank.png')} style={styles.paymentIcon} />
              <Text>Bank</Text>
            </TouchableOpacity>
          </View>

          {selectedMethod === 'card' && (
            <View style={styles.cardDetails}>
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChangeText={(text) =>
                  setCardDetails({ ...cardDetails, cardNumber: text })
                }
              />
              <View style={styles.cardExtraCont}>
                <TextInput
                  style={[styles.input, styles.cardExtra]}
                  placeholder="Expiry"
                  value={cardDetails.expiry}
                  onChangeText={(text) =>
                    setCardDetails({ ...cardDetails, expiry: text })
                  }
                />
                <TextInput
                  style={[styles.input, styles.cardExtra]}
                  placeholder="CVC"
                  value={cardDetails.cvc}
                  onChangeText={(text) =>
                    setCardDetails({ ...cardDetails, cvc: text })
                  }
                />
              </View>
            </View>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Invoice')}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    paymentMethods: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    paymentCard: {
      width: '30%',
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      alignItems: 'center',
    },
    selectedPayment: {
      borderColor: '#00BCD4',
      backgroundColor: '#E1F5FE',
    },
    paymentIcon: {
      width: 30,
      height: 30,
      marginBottom: 5,
    },
    priceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    priceLabel: {
      fontSize: 16,
    },
    priceValue: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
    },
    cardDetails: {
      marginTop: 20,
    },
    cardExtraCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardExtra: {
      width: '48%',
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

  export default Payment;