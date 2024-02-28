import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text,View } from '@/components/Themed';

import { ColorText } from '@/components/ColorText';
import CustomButton from '@/components/CustomButton';
import { ConditionCard } from '@/components/conditionButton';
import { Counter } from '@/components/CompteurMoreLess';
import Loader from '@/components/Loader';
import { CountTime } from '@/components/CountTime';




export default function TabOneScreen()  {
  return (
    <Loader>
      <View style={styles.container}>
        <ColorText style={styles.title}>Tab One</ColorText>
        <CountTime/>
        
        <View style={styles.separator} />
        <CustomButton style={styles.title}><Text>Test log</Text></CustomButton>
        <CustomButton style={styles.title}><Text>Black theme</Text></CustomButton>

        
        <Counter/>
        
      </View>
    </Loader>
  );
}
//<ConditionCard/>
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
