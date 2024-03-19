import { TouchableHighlight, StyleSheet, Text, View } from "react-native";

const Button = (title, onPress) => {
  return (
    <TouchableHighlight
      style={{ borderRadius: 20 }}
      onPress={() => setCounter(counter + 2)}
    >
      <View style={styles.myButton}>
        <Text style={{ color: "#fff" }}>Add + 2</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  myButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 1,
    paddingVertical: 1,
  },
});

export default Button;
