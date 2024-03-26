import { StyleSheet, View, FlatList } from "react-native";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const result = await fetch(
        "https://backend-api-expres
    // try {
    //   const result = await fetch(
    //     "https://backend-api-express-1sem2024-rbd1.onrender.com/user"
    //   );s-p6sl.onrender.com/user"
      );
      const data = await result.json();
      console.log(data);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.main}>
      <H1>Usuarios</H1>

      <View style={styles.listUser}>
        <FlatList
          data={users}
          renderItem={({ item }) => <CardUser user={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "#fcfdf5",
    color: "#DDD",
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listUser: {
    height: 500,
    width: "100%",
  },
});

export default Body;
