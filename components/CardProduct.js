import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

import H4 from "./ui/H4";

const CardProduct = ({ product }) => {
  return (
    <View style={styles.card}>
      <View style={styles.radius}>
        <Image style={styles.photoImg} source={product.photo} />
      </View>

      <View>
        <H4>{product.name}</H4>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 200,
    height: 500,
    backgroundColor: "#fff",
    flexDirection: "row",
    // borderColor: "#000",
    // borderWidth: 1,
    // borderStyle: "solid",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  photoImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  price: {
    marginTop: 4
},
});

export default CardProduct;
