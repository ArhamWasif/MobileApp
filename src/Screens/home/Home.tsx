import { View, Text } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
      <Text style={{color: 'white'}}>Home Screen</Text>
    </View>
  )
}

export default home