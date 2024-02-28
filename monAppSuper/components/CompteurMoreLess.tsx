import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Counter() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
  
    const increment = (value: number) => {countRef.current = countRef.current + value;};
    const decrement = (value: number) => {countRef.current = countRef.current - value;};
    const updateCount = () => {setCount(countRef.current);};
    const reset = () => {countRef.current = 0;updateCount();};

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => increment(1)}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increment(2)}>
          <Text style={styles.buttonText}>+2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => decrement(1)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => decrement(2)}>
          <Text style={styles.buttonText}>-2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={updateCount}>
          <Text style={styles.buttonText}>Mettre à jour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  countText: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', marginTop: 10 },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    borderColor: 'purple',
    borderWidth: 1.5,
  },
  resetButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    borderColor:'pink',
    borderWidth: 1.5,
  },
  buttonText: { color: 'white' },
});
