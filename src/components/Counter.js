import React from 'react'
import { View, Text } from 'react-native'

const Counter = props => {
  return (
    <View>
      <Text>{props.counter}</Text>
    </View>
  )
}

export default Counter
