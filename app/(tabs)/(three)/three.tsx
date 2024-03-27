import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import { HomeScreen } from '@/components/HomeScreen';
import { StyledSectionList } from '@/components/SectionList';
import { MonoText } from '@/components/StyledText';


export default function TabThreeScreen() {
  return (
    <View style={{backgroundColor: 'rgba(52, 52, 52, 0)'}}>
      <HomeScreen/>
      <MonoText/>
      <StyledSectionList/>
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
