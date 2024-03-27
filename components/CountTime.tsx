import React, { useState, useEffect, useRef } from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native';

type CallbackFunction = () => void;

function useInterval(callback:CallbackFunction, delay: number |null) {
  const savedCallback = useRef<CallbackFunction | null>(null);
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }, delay);
      return () => clearInterval(id);
    }
  }, [delay])
}

export function CountTime() {
    const [count, setCount] = useState(0)
    useInterval(() => {
      setCount(count + 1)
    }, 1000)
    return <Text style={styles.countInt}>{count}</Text>
}
  
const styles = StyleSheet.create({
    countInt: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
})