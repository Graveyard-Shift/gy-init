export const goodluck = `
import React from 'react'
import { View, Text } from 'react-native'
import commonStyles from '../../styles'

export default function Goodluck() {
  return (
    <View style={[commonStyles.flex1, commonStyles.centeredView]}>
      <Text>Good luck</Text>
    </View>
  )
}
`.trimStart()

export const app = `
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStack from './src/navigationStack'
import store from './src/app/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  )
}
`.trimStart()
