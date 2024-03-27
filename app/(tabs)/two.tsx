import { Button, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MonoText } from '@/components/StyledText';
import { AfficherListe } from '@/components/listComponent';
import { ConditionCard } from '@/components/conditionButton';


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
      <View style={styles.separator} />
      <ConditionCard/>
      <AfficherListe/>
      
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


