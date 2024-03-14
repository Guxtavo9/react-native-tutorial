import { StyleSheet, View, FlatList } from "react-native";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import { useEffect, useState } from "react";

const Body = () => {

  const [users, setUsers] = useState([]);  

  const getUsers = async () => {
    try {
      const result = await fetch('https://backend-api-express-p6sl.onrender.com/user');
      const data = await result.json();
      console.log(data.success);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <View style={styles.main}>
      <H1 title="Usuarios" />

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <CardUser user={item} keyExtractor={(item) => item.id} />
        )}
      />
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
});

export default Body;
