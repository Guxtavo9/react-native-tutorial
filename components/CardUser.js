import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

import React from "react";

const CardUser = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.radius}>
        <Image style={styles.avatarImg} source={user.avatar} />
      </View>

      <View style={styles.info}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 300,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    // borderColor: "#000",
    // borderWidth: 1,
    // borderStyle: "solid",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: "#fff",
  },

  radius: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 45,
    overflow: "hidden",
  },
});

export default CardUser;
