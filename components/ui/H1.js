import { Text, StyleSheet } from "react-native";
const H1 = (props) => {
  return <Text style={styles.h1}>{props.title}</Text>;
};

H1.propTypes = {};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
});

export default H1;
