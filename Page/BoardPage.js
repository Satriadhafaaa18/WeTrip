import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function BoardPage({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
        <Image 
          source={require('../assets/LogoWeTrip.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 650,
    height: 850,
  },
});