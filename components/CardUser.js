import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

import React from "react";

const CardUser = () => {
  return (
    <View style={styles.card}>
      <View style={styles.radius}>
        <Image
          style={styles.avatarImg}
          source={{
            uri: "https://picsum.photos/60/60",
          }}
        />
      </View>

      <View style={styles.info}>
        <Text>Name</Text>
        <Text>Email</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxWidth: 300,
    maxHeight: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: "#fff",
  },

  radius: {
    marginLeft: 10,
    marginTop: 10,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 45,
    overflow: "hidden",
  },
});

export default CardUser;
