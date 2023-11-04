import { ActivityIndicator, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

// RUTAS DE TERCEROS
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SaveDestination from '../../screens/StackScreens/SaveDestination';
import { CitiesInterface } from '../../../domain/GlobalInterfaces';
import { BottonTapRoutesAndroid } from '../BottomTapsRoutes/BottomTapsRoutes';
import TopTabsRoutes from '../TopTapsRoutes/TopTabsRoutes';
import HeaderTopTabs from '../../components/HeaderTopTabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


//MIS RUTAS 


export type RootInitialStackParams = {
  SaveDestination: { citie: CitiesInterface },
  BottonTapRoutesAndroid: undefined,
  TopTabsRoutes: undefined
  ExploreScreen: undefined
  ExploreScn: undefined
}
const Stack = createStackNavigator<RootInitialStackParams>();

const renderInput = () => {
  return (
    <HeaderTopTabs />
  );
};

const StackInitialRoutes = () => {


  return (
    <NavigationContainer>

      <Stack.Navigator

        screenOptions={({ route }) => {
          if ( route.name === 'BottonTapRoutesAndroid') {
            return {
              header: renderInput,
            };
          }

          return {
            headerShown: false,
          };
        }}

      >
        <Stack.Screen name="BottonTapRoutesAndroid" component={BottonTapRoutesAndroid} />
        <Stack.Screen name="TopTabsRoutes" component={TopTabsRoutes} />
        <Stack.Screen name="SaveDestination" component={SaveDestination}  />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default StackInitialRoutes

const styles = StyleSheet.create({

})
