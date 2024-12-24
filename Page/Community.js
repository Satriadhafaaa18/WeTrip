
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Community() {
  const [likes, setLikes] = useState({
    1: 157,
    2: 416,
    3: 300,
    4: 444
  });

  const [liked, setLiked] = useState({});

  const handleLike = (id) => {
    setLiked(prev => {
      const newLiked = { ...prev };
      newLiked[id] = !newLiked[id];
      return newLiked;
    });

    setLikes(prev => {
      const newLikes = { ...prev };
      newLikes[id] = newLikes[id] + (liked[id] ? -1 : 1);
      return newLikes;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search community"
          placeholderTextColor="#666"
        />
        <TouchableOpacity>
          <Ionicons name="filter" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Your community</Text>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        <TouchableOpacity style={[styles.categoryButton, styles.activeCategory]}>
          <Text style={styles.activeCategoryText}>Kuliner Semarang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Pecinta Alam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Air terjun</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView style={styles.commentsContainer}>
        <View style={styles.commentCard}>
          <View style={styles.userInfo}>
            <Image 
              source={require('../assets/Profile1.png')} 
              style={styles.profilePic}
            />
            <View>
              <Text style={styles.userName}>Alexander</Text>
              <Text style={styles.userEmail}>@alexander1997</Text>
            </View>
            <Text style={styles.timeStamp}>20 min ago</Text>
          </View>
          <Text style={styles.commentText}>
            Kuliner Semarang, yuk sini kalau beken cobaLumpia Semarang! Roti GandosPetis! Sego Kucing! yuk yuk jajen data utadigi lihat kanggo!
          </Text>
          <View style={styles.interactionContainer}>
            <TouchableOpacity 
              style={styles.likeContainer}
              onPress={() => handleLike(1)}
            >
              <Ionicons 
                name={liked[1] ? "heart" : "heart-outline"} 
                size={20} 
                color={liked[1] ? "red" : "#666"}
              />
              <Text style={styles.likeCount}>{likes[1]} likes</Text>
            </TouchableOpacity>
            <View style={styles.commentCountContainer}>
              <Ionicons name="chatbubble-outline" size={20} color="#666" />
              <Text style={styles.commentCount}>5 comments</Text>
            </View>
          </View>
        </View>

        {/* Similar comment cards for other users */}
        {/* You can repeat the above comment card structure with different data */}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people" size={24} color="#00B4D8" />
          <Text style={[styles.navText, styles.activeNavText]}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="location-outline" size={24} color="#666" />
          <Text style={styles.navText}>Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="play-outline" size={24} color="#666" />
          <Text style={styles.navText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#666" />
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
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: '#00B4D8',
  },
  categoryText: {
    color: '#666',
  },
  activeCategoryText: {
    color: '#fff',
  },
  commentsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  commentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userEmail: {
    color: '#666',
    fontSize: 14,
  },
  timeStamp: {
    position: 'absolute',
    right: 0,
    color: '#666',
    fontSize: 12,
  },
  commentText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  interactionContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  likeCount: {
    marginLeft: 5,
    color: '#666',
  },
  commentCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentCount: {
    marginLeft: 5,
    color: '#666',
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
    color: '#666',
    marginTop: 5,
  },
  activeNavText: {
    color: '#00B4D8',
  },
});