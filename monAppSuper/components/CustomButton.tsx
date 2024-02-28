import { Button, TouchableOpacity } from 'react-native';
import { Text, TextProps } from './Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function CustomButton (props : TextProps) {
    return <TouchableOpacity {...props} style={[
        props.style, {color: "purple"}, 
        props.style, {padding:5}, 
        props.style, {backgroundColor:"pink"},
        props.style, {borderRadius:10},
        props.style, {borderColor:"purple"},
        props.style, {borderWidth:1}]}
        onPress={() => {
            console.log('TEST OK');
            AsyncStorage.setItem('themeName', 'dark')
          }}/>;
    
}



export default CustomButton;