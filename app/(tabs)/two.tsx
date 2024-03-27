import { Button, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MonoText } from '@/components/StyledText';


export default function TabTwoScreen() {
  
  async function storeThemeName(value: string) {
    try {
      await AsyncStorage.setItem('themeName', value)
    } catch (e) {
    }
  }
  

  return (
    <View style={styles.container}>
      <Button title="Thème sombre" onPress= { () => storeThemeName("dark")} />
      <Button title="Thème clair" onPress={ () =>storeThemeName("light")} />
      <Button title="Blue" onPress={ () =>storeThemeName("blue")} />
      <MonoText/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  Button: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});