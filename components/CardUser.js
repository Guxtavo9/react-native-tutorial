import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

import H4 from "./ui/H4";

const CardUser = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.radius}>
        <Image style={styles.avatarImg} source={user.avatar} />
      </View>

      <View>
        <H4>{user.name}</H4>
        <Text style={styles.email}>{user.email}</Text>
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
    marginHorizontal: 10,
    marginVertical: 10,
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },

  radius: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    overflow: "hidden",
  },
  email: {
    marginTop: 4
},
});

export default CardUser;
