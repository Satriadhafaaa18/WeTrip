import React, { useState } from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Review = ({ route }) => {
    const navigation = useNavigation();
    const { trip } = route.params;
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    const handleSubmit = () => {
      navigation.navigate('Trip');
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>History</Text>
        
        <View style={styles.reviewCard}>
          <Image source={require('../assets/LondonTrip.png')} 
          style={styles.reviewImage} />
          <Text style={styles.reviewTitle}>{trip.title}</Text>
          <Text style={styles.reviewDate}>23 April - 30 April 2024</Text>
          
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
         <TouchableOpacity 
           key={star} 
           onPress={() => setRating(star)}>
          <Image
            source={require('../assets/star.png')} 
            style={[
              styles.starImage,
              { tintColor: star <= rating ? '#FFD700' : '#D3D3D3' },
            ]}
          />
         </TouchableOpacity>
         ))}
         </View>
  
          <TextInput
            style={styles.commentInput}
            placeholder="Comment"
            multiline
            value={comment}
            onChangeText={setComment}
          />
  
          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
      top: 20,
    },
    reviewCard: {
      margin: 20,
      padding: 20,
      backgroundColor: '#AEE8F4',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      top: 10,

    },
    reviewImage: {
      width: 371,
      height: 100,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      left: -20,
      top: -20,
    },
    reviewTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      top: -10,
    },
    reviewDate: {
      color: '#666',
      marginBottom: 20,
      top: -13,
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    starImage: {
      fontSize: 30,
      marginHorizontal: 5,
      top: -15,
    },
    commentInput: {
      height: 100,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top',
      marginBottom: 20,
      backgroundColor: '#FFFFFF'
    },
    submitButton: {
      backgroundColor: '#00BCD4',
      
      padding: 15,
      borderRadius: 40,
      alignItems: 'center',
      
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });
  
  export default Review ;