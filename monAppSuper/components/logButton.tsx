import React from 'react'
import { Button } from 'react-native'

export default function App() {
  return (
    <Button
      title="Bouton de test"
      onPress={() => {
        console.log('TEST OK');
      }}
    />
  )
}


