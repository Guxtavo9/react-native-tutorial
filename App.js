import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.radius}></View>
        <Text style={styles.text}>.</Text>
        <Text style={styles.header}>a</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>b</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>c</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#701010',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'

  },
  text: {
    color: '#fff',
    fontSize: 40,
  },
  radius: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  main: {
    flex: 2,
    backgroundColor: '#000080',
    color: '#fff',
    fontSize: 40,
    width: '100%',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#008000',
    color: '#fff',
    fontSize: 40,
    width: '100%',
    textAlign: 'center',
  },
});
