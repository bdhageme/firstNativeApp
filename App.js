import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Brennan Hagemeier</Text>
      <Image
        source={{uri:'https://hatrabbits.com/en/random-image/'}}
        style={styles.image}
        />
        <Button
          title="Press Me!"
          color="green"
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, image:{
    height: 50,
    width: 50
  }
});
