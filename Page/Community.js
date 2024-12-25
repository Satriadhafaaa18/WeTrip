import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../Components/Footer";

export default function Community({ navigation }) {
  const [comments, setComments] = useState([
    {
      profilePic: require("../assets/Profile1.png"),
      name: "Alexander",
      userName: "@alexander1997",
      time: "20 min ago",
      comment: `Kuliner Semarang, yuk sini kalau beken cobaLumpia Semarang! Roti GandosPetis! Sego Kucing! yuk yuk jajen data utadigi lihat kanggo!`,
      like: 139,
      commentCount: 15,
    },
    {
      profilePic: require("../assets/Profile2.png"),
      name: "Aliyah Putri",
      userName: "@aliyahputri",
      time: "40 min ago",
      comment: `Soto Bangkong di Semarang juga terkenal loh! Kuah sotonya gurih banget, dan dagingnya empuk. Jadi pengen makan malem ini! 🍲 #sotobangkong #kulinersemarang`,
      like: 418,
      commentCount: 23,
    },
    {
      profilePic: require("../assets/Profile3.png"),
      name: "Karina Ratu",
      userName: "@karinaratu",
      time: "59 min ago",
      comment: `Gak lengkap kalau ke Semarang tanpa mampir ke Angkringan Simpang Lima. Nasi kucingnya enak banget, pas banget buat cemilan sore! 🍚 #angkringan #semarang`,
      like: 600,
      commentCount: 30,
    },
    {
      profilePic: require("../assets/Profile4.png"),
      name: "Jake Goss",
      userName: "@jakegoss",
      time: "1h ago",
      comment: `Tahu Gimbal Semarang juga gak kalah lezat! Tahu goreng dengan gimbal (bakwan) dan saus kacang yang khas. Bikin ketagihan! 😍 #tahugimbal #streetfoodsemarang`,
      like: 600,
      commentCount: 30,
    },
  ]);

  const toggleLike = (index) => {
    const newComments = [...comments];
    newComments[index].liked = !newComments[index].liked;
    newComments[index].like += newComments[index].liked ? 1 : -1;
    setComments(newComments);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community</Text>

      <View style={styles.searchBox}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search community"
            placeholderTextColor="gray"
          />
          <Ionicons name="search" size={20} color="gray" />
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={20} color="#00B4D8" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Your community</Text>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          <TouchableOpacity
            style={[styles.categoryButton, styles.activeCategory]}
          >
            <Text style={styles.activeCategoryText}>Kuliner Semarang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Pecinta Alam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Air terjun</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.commentsContainer}>
        {comments.map((item, index) => {
          return (
            <View style={styles.commentCard} key={index}>
              <View style={styles.userInfo}>
                <Image
                  source={item.profilePic}
                  style={styles.profilePic}
                />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.userName}>{item.userName}</Text>
                </View>
                <Text style={styles.timeStamp}>{item.time}</Text>
              </View>
              <Text style={styles.commentText}>{item.comment}
              </Text>
              <View style={styles.interactionContainer}>
                <TouchableOpacity
                  style={styles.likeContainer}
                  onPress={() => toggleLike(index)}
                >
                  <Ionicons
                    name={item.liked ? "heart" : "heart-outline"}
                    size={20}
                    color={item.liked ? "red" : "#666"}
                  />
                  <Text style={styles.likeCount}>{item.like} likes</Text>
                </TouchableOpacity>
                <View style={styles.commentCountContainer}>
                  <Ionicons name="chatbubble-outline" size={20} color="#666" />
                  <Text style={styles.commentCount}>{item.commentCount} comments</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <Footer navigation={navigation} activeScreen={"Community"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 20,
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: "row",
    marginHorizontal: 16,
    alignItems: "baseline",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: 20,
  },
  searchContainer: {
    width: "92%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingRight: 20,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: "gray",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    // Android shadow
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
    fontSize: 20,
    color: "red",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  categoryButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
    padding: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#00B4D8",
  },
  activeCategory: {
    backgroundColor: "#00B4D8",
  },
  categoryText: {
    fontSize: 16,
    color: "#00B4D8",
    fontWeight: "bold",
  },
  activeCategoryText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  commentsContainer: {
    flex: 1,
  },
  commentCard: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderColor: "#00B4D8",
    paddingHorizontal: 16,
    paddingBottom: 10,
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userName: {
    color: "#666",
    fontSize: 14,
  },
  timeStamp: {
    position: "absolute",
    right: 0,
    color: "#666",
    fontSize: 12,
  },
  commentText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  interactionContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  likeCount: {
    marginLeft: 5,
    color: "#666",
  },
  commentCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentCount: {
    marginLeft: 5,
    color: "#666",
  },
});
