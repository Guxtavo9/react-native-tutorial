import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Footer = () => {
  return(<View style={styles.footer}>
    <Text style={styles.text}>é o Batima</Text>
    <Image style={styles.footerImg} source={require("../assets/avatar.jpg")} />
    <Text style={styles.text}> &copy; Não é o Batima</Text>
  </View>)
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        // backgroundColor: "#2b2b2b",
        color: "#fff",
        fontSize: 40,
        width: "100%",
        textAlign: "center",
        // flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      },
      footerImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
      },
      text: {
        marginLeft: 10,
        color: "#fff",
        fontSize: 26,
      },
      
});

export default Footer;