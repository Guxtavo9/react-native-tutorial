import { StyleSheet, Text, View } from "react-native";
import H1 from "./ui/H1";
import { Image } from "expo-image";
import CardUser from "./CardUser";

const Body = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>b</Text>
      <CardUser />
      <H1 title="seja bem vindo"/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 5,
    // backgroundColor: "#fcfdf5",
    color: "#fff",
    fontSize: 40,
    width: "100%",
    textAlign: "center",
  },
  text: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 26,
  },
});

export default Body;
