import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.radius}>
        <Image
          style={styles.avatarImg}
          source={{
            uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
          }}
        />
      </View>
      <Text style={styles.text}>Batima</Text>
      <Text style={styles.header}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "#2b2b2b",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: "#fff",
  },

  radius: {
    marginLeft: 10,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 45,
    overflow: "hidden",
  },

  text: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 26,
  },

});

export default Header;
