import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cadastrar = () => {

  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastrar</Text>
      {/* <Button title="Contact" onPress={() => {navigation.navigate('Contact')}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#707070'
  },
});

export default Cadastrar;
