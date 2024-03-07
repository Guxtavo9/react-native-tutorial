import { Text, StyleSheet } from "react-native";
const H1 = (props) => {
  return <Text style={styles.h1}>{props.title}</Text>;
};

H1.propTypes = {};

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
});

export default H1;
