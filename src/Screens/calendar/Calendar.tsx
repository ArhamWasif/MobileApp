import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Counter from '../../Components/Counter/Counter'

const Calendar = () => {
  return (
    <SafeAreaProvider>
    <View>
      <Text>Calendar</Text>
      <Counter/>
    </View>
    </SafeAreaProvider>
  )
}

export default Calendar