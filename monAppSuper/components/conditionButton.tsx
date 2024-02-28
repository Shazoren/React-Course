import React from 'react'
import { View, Text, TouchableOpacity,  } from 'react-native'
import CustomButton from './CustomButton'


const ConditionButton = ({ loading, error, title }:{loading:boolean, error: boolean, title:string}) => {
  let content
  if (error) {
    content = <TouchableOpacity style={{ backgroundColor: "red", borderColor:"purple", borderWidth:1, borderRadius:10, padding:5  }}><Text>Error</Text></TouchableOpacity>
  } else if (loading) {
    content = <TouchableOpacity style={{ backgroundColor: "blue", borderColor:"purple", borderWidth:1, borderRadius:10, padding:5  }}><Text>Loading...</Text></TouchableOpacity>
  } else {
    content = (
      <View>
        <TouchableOpacity style={{ backgroundColor: "green", borderColor:"purple", borderWidth:1, borderRadius:10, padding:5  }}><Text>{title}</Text></TouchableOpacity>
      </View>
    )
  }
  return <View style={{ padding: 24 }}>{content}</View>
}

export function ConditionCard() {
    return (
      <View>
        <ConditionButton error={true} loading={false} title="Test Erroné"/>
        <ConditionButton error={false} loading={true} title="Test en Chargement"/>
        <ConditionButton error={false} loading={false} title="Test Réussi"/>
      </View>
    )
  }
  