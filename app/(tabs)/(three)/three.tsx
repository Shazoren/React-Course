import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Button } from 'react-native';

import { HomeScreen } from '@/components/HomeScreen';


export default function TabThreeScreen() {
  return (
    <View style={{backgroundColor: 'rgba(52, 52, 52, 0)'}}>
      <HomeScreen/>
      <img src="https://c.tenor.com/1ssDwtDeM7oAAAAM/disappear.gif"/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
