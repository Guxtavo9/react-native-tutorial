import { Text, StyleSheet } from "react-native";
const H4 = ({style, children}) => {
  return <Text style={styles.h4}>{children}</Text>;
};

H4.propTypes = {};

const styles = StyleSheet.create({
  h4: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});

export default H4;
