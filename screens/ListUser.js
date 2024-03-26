import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

// const backgroundImg = require("../assets/background2.avif");
const backgroundImg = {uri:'https://c4.wallpaperflare.com/wallpaper/553/564/19/cyberpunk-amoled-dark-vertical-hd-wallpaper-preview.jpg'};

const ListUser = () => {
  return (
    <ImageBackground
      source={backgroundImg}
      resizeMode="cover"
      style={styles.image}
    >

      <Body />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 12,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default ListUser;
