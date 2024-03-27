import { Text, TextProps } from './Themed';



export function ColorText (props : TextProps) {
    return <Text {...props} style={[props.style, {color: "purple"}]}/>;
}



//export default ColorText;