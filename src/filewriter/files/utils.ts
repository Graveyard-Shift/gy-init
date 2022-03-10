export const utils = `
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { NavigationStackRoutes } from '../../navigationStack'

export type StackRoute = keyof NavigationStackRoutes

export type Screen<T extends StackRoute> =
  StackScreenProps<NavigationStackRoutes, T>

export type Navigation<T extends StackRoute> =
  StackNavigationProp<NavigationStackRoutes, T>

export type ScreenRoute<T extends StackRoute> =
  RouteProp<NavigationStackRoutes, T>
`.trimStart()
