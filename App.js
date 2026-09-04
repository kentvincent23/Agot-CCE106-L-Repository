import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);

  const addOrder = () => {
    setScore(score + 1);
  };

  const minusOrder = () => {
    setScore(score - 1);
  };

  return (
    <View style={styles.container}>
      <Text > ☕ Coffee Orders: {score}</Text>

      <TouchableOpacity onPress={addOrder} style={styles.button}>
        <Text style={styles.buttonText}>Add 1+</Text>
      </TouchableOpacity>

      <Pressable onPress={minusOrder} style={styles.button}>
        <Text style={styles.buttonText}>Decrease -1</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1abeb',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },
  button: {
    backgroundColor: '#210f64',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 100 ,
    fontSize: 100,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});