import { StyleSheet, View, FlatList } from "react-native";
import H1 from "./ui/H1";
import CardUser from "./CardUser";

const users = [
  {
    id: 1,
    name: "Xabulla Xabuleixons",
    email: "xabulla@xabulla.com",
    avatar: "https://picsum.photos/60/60",
  },
  {
    id: 2,
    name: "Thwongos Thwongosons",
    email: "thwongos@thwongos.com",
    avatar: "https://picsum.photos/60/60",
  },
  {
    id: 3,
    name: "Lhongus Lhungusons",
    email: "lhongus@lhongus.com",
    avatar: "https://picsum.photos/60/60",
  },
];

const Body = () => {
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
