import React, { useState } from "react";
import {View,Text,ScrollView,Image,TouchableOpacity,StyleSheet,} from "react-native";
import Footer from "../Components/Footer";
import { Ionicons } from "@expo/vector-icons";

export default function Thread ({ navigation }) {
  const [threads] = useState([
    {
      id: 1,
      title: "Day trips from Kyoto",
      image: require("../assets/ThreadKyoto.png"),
      date: "21 Aug 2024",
      likes: 57,
      comments: 23,
      views: 289,
      author: {
        name: "Alex Smith",
        email: "alexsmith@dummy",
        avatar: require("../assets/Profile1.png"),
      },
      description: "Hey, guys! Di vlog kali ini, aku bakal bawa kalian jalan-jalan seru ke Kyoto, bareng Japan Trip Club! Kita bakal eksplor kuil-kuil kece, taman-taman asri, dan pastinya makan-makan enak yang wajib banget dicoba. Semua momen seru dan pengalaman unik barengJapan Trip Club, yuk ikutin perjalanan liburan aku di Kyoto dan rasainsendiri serunya!",
    },
    {
      id: 2,
      title: "Korea Street Food",
      image: require("../assets/KoreanFood.png"),
      date: "18 Aug 2024",
      likes: 45,
      comments: 18,
      views: 156,
      author: {
        name: "Sarah Kim",
        email: "sarah@mail",
        avatar: require("../assets/Profile2.png"),
      },
      description: "Hey, guys! Kali ini aku bakal bawa kalian keliling Seoul nyobain street food yang enak banget! Dari tteokbokki pedas, hotteok manis, samgyetang, sampai churros Korea yang crispy! Semua jajanan khas Korea yang wajib dicoba banget kalau lagi di Seoul. Yuk, ikutin perjalanan aku nyobain makanan-makanan street food yang bikin nagih, dan rasain serunya eksplor kuliner Seoul bareng Japan Trip Club!",
    },
  ]);

  const [likedThreads, setLikedThreads] = useState(new Set());

  const handleLike = (threadId) => {
    setLikedThreads((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(threadId)) {
        newSet.delete(threadId);
      } else {
        newSet.add(threadId);
      }
      return newSet;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Thread</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}>
          <Text style={[styles.tabButtonText, styles.tabButtonTextActive]}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Latest</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {threads.map((thread) => (
          <View key={thread.id} style={styles.threadCard}>
            <Image source={thread.image} style={styles.threadImage} />
            <View style={styles.threadContent}>
              <View style={styles.threadHeader}>
                <Text style={styles.threadTitle}>{thread.title}</Text>
                <Text style={styles.threadDate}>{thread.date}</Text>
              </View>

              <View style={styles.interactionBar}>
                <TouchableOpacity
                  onPress={() => handleLike(thread.id)}
                  style={styles.interactionButton}
                >
                  <Ionicons
                    name={
                      likedThreads.has(thread.id) ? "heart" : "heart-outline"
                    }
                    size={20}
                    color={likedThreads.has(thread.id) ? "red" : "#666"}
                  />
                  <Text style={styles.interactionText}>
                    {thread.likes + (likedThreads.has(thread.id) ? 1 : 0)} likes
                  </Text>
                </TouchableOpacity>

                <View style={styles.interactionButton}>
                  <Ionicons name="chatbubble-outline" size={20} color="#666" />
                  <Text style={styles.interactionText}>
                    {thread.comments} comments
                  </Text>
                </View>

                <View style={styles.interactionButton}>
                  <Ionicons name="eye-outline" size={20} color="#666" />
                  <Text style={styles.interactionText}>
                    {thread.views} views
                  </Text>
                </View>
              </View>

              <View style={styles.authorSection}>
                <Image
                  source={thread.author.avatar}
                  style={styles.authorAvatar}
                />
                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>{thread.author.name}</Text>
                  <Text style={styles.authorEmail}>{thread.author.email}</Text>
                </View>
              </View>

              <Text style={styles.description}>{thread.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Footer navigation={navigation} activeScreen={"Thread"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  banner: {
    height: 200,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  featured: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  featuredCard: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredImage: {
    width: "100%",
    height: 200,
  },
  featuredContent: {
    padding: 12,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  seeDetailButton: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tabButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  tabButtonText: {
    fontSize: 16,
    color: "#1F79CC",
    fontWeight: "semibold"
  },
  tabButtonTextActive: {
    fontWeight: "bold"
  },
  tabButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#1F79CC",
  },  
  threadCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  threadImage: {
    width: "100%",
    height: 200,
  },
  threadContent: {
    padding: 16,
  },
  threadHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  threadTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  threadDate: {
    color: "#666",
  },
  interactionBar: {
    flexDirection: "row",
    marginBottom: 16,
  },
  interactionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  interactionText: {
    marginLeft: 4,
    color: "#666",
  },
  authorSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "600",
  },
  authorEmail: {
    color: "#666",
  },
  description: {
    color: "#444",
    lineHeight: 20,
  },
});
