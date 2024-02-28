import { StyleSheet } from 'react-native';
import { StyledSectionList } from '@/components/SectionList';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { AfficherListe } from '@/components/listComponent';

export default function TabTwoScreen() {
  return (
    <View>
      
      <AfficherListe/>
    </View>
    
  );
}
//<StyledSectionList/>
//<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"  />
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
