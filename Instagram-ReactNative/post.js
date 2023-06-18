import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/img/1.jpeg")}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Lebron Goat</Text>
      </View>
      <Image
        source={require("./assets/img/post.webp")}
        style={styles.postImage}
      />
      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
          <Ionicons
            name="heart-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="bookmark-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Text style={styles.likes}>123 likes</Text>
        <Text style={styles.caption}>
          Descrição do post. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </Text>
        <Text style={styles.timestamp}>Há 1 hora</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: "#fff",
    top: -200,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  footer: {
    padding: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  icon: {
    marginRight: 16,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  caption: {
    marginBottom: 8,
  },
  timestamp: {
    color: "#999",
  },
});

export default Post;
