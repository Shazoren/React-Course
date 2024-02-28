import React, { useRef, useReducer, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface Item {
  id: string;
  name: string;
}

type Action =
  | { type: 'add'; payload: Item }
  | { type: 'remove'; index: number };

const Data: Item[] = [
  { id: '1', name: 'Apples' },
  { id: '2', name: 'Bananas' },
  { id: '3', name: 'Milk' },
];

export function AfficherListe() {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [items, dispatch] = useReducer(
    (state: Item[], action: Action) => {
      switch (action.type) {
        case 'add':
          return [...state, action.payload];
        case 'remove':
          return state.filter((_, index) => index !== action.index);
        default:
          return state;
      }
    },
    Data
  );

  const handleSubmit = () => {
    if (inputValue.trim()) {
      const newItem: Item = { id: Date.now().toString(), name: inputValue };
      dispatch({ type: 'add', payload: newItem });
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput style={styles.TextInput}
          ref={inputRef}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}><Text style={styles.buttonText}>Add</Text></TouchableOpacity>
      </View>
      <FlatList 
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <Text style= {styles.Data}>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'remove', index })}><Text style={styles.buttonText}>Remove</Text></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:30 },
  TextInput: {borderColor:'black', borderWidth:1.5, height:30, marginBottom:10},
  Data: {marginLeft: 10},
  button: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    marginLeft:10,
    borderColor: 'purple',
    borderWidth: 1.5,
  },
  buttonText: { color: 'white',flex: 1, alignItems: 'center', justifyContent: 'center' },
});
