export const navigationStack = `
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

export type NavigationStackRoutes = {
  Home: undefined
}

const { Navigator, Screen } = createStackNavigator<NavigationStackRoutes>()

export default function NavigationStack() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
`.trimStart()

export const homeScreen = `
import React from 'react'
import { Screen } from '../../app/utils'
import Goodluck from '../../components/Goodluck'

export default function Home({ navigation }: Screen<'Home'>) {
  return ( <Goodluck /> )
}
`.trimStart()
