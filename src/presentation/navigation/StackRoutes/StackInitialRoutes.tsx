import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

// RUTAS DE TERCEROS
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SaveDestination from '../../screens/StackScreens/SaveDestination';
import { CitiesInterface } from '../../../domain/GlobalInterfaces';
import { BottonTapRoutesAndroid } from '../BottomTapsRoutes/BottomTapsRoutes';
import TopTabsRoutes from '../TopTapsRoutes/TopTabsRoutes';


//MIS RUTAS 


export type RootInitialStackParams = {
  SaveDestination: { citie: CitiesInterface },
  BottonTapRoutesAndroid: undefined,
  TopTabsRoutes: undefined
}
const Stack = createStackNavigator<RootInitialStackParams>();

const StackInitialRoutes = () => {


  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false,

      }} >

        <Stack.Screen name="BottonTapRoutesAndroid" component={BottonTapRoutesAndroid} />
        <Stack.Screen name="TopTabsRoutes" component={TopTabsRoutes} />
        <Stack.Screen name="SaveDestination" component={SaveDestination} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default StackInitialRoutes

const styles = StyleSheet.create({})