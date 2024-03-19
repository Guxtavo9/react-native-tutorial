import { StyleSheet, View, FlatList, Text, TextInput } from "react-native";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

const Body = () => {
  const [txtName, setTxtName] = useState("");
  const [txtEmail, setTxtEmail] = useState("");
  const [txtAvatar, setTxtAvatar] = useState("");

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);

  const getUsers = async () => {
    try {
      const result = await fetch(
        "https://backend-api-express-p6sl.onrender.com/user"
      );
      const data = await result.json();
      console.log(data);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const postUser = async (user) => {
    try {
      const result = await fetch(
        "https://backend-api-express-p6sl.onrender.com/user",
        {
          header:{
            'Content-Type':'application/json'
          },
          method: "POST",
          body: json.stringfy({
            name: txtName,
            email: txtEmail,
            avatar: txtAvatar,
          }),
        }
      );
      const data = await result.json();
      console.log(data);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const result = await fetch(
        "https://backend-api-express-p6sl.onrender.com/product"
      );
      const data = await result.json();
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={txtName}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={txtEmail}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={txtAvatar}
      />

      <Button title="Cadrastar" onPress={postUser} />

      <H1>Usuarios</H1>

      <Button title="Add + 2" onPress={() => setCounter(counter + 2)} />

      <Button title="Add + 1" onPress={() => setCounter(counter + 1)} />

      <Text style={{ color: "#000" }}>Valor: {counter}</Text>

      <View style={styles.listUser}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <CardUser user={item} keyExtractor={(item) => item.id} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 9,
    // backgroundColor: "#fcfdf5",
    color: "#fff",
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listUser: {
    height: 120,
  },
  input: {
    height: 40,
    margin: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
  },
});

export default Body;
