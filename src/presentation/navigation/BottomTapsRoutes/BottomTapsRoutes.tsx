import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator, MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../../screens/BottomTapsScreens/ExploreScreen';
import FavoritesScreen from '../../screens/BottomTapsScreens/FavoritesScreen';
import TravelsScreen from '../../screens/BottomTapsScreens/TravelsScreen';
import MessagesScreen from '../../screens/BottomTapsScreens/MessagesScreen';
import ProfileScreen from '../../screens/BottomTapsScreens/ProfileScreen';
import { CitiesInterface } from '../../../domain/GlobalInterfaces';
import TopTabsRoutes from '../TopTapsRoutes/TopTabsRoutes';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootBottomTabParams = {
    ExploreScreen: undefined  
    FavoritesScreen: undefined
    TravelsScreen: undefined
    MessagesScreen: undefined
    ProfileScreen: undefined
    TopTabsRoutes: undefined
  }

const BottomTabAndroid = createMaterialBottomTabNavigator<RootBottomTabParams>()


export const BottonTapRoutesAndroid = () => {
    return (
      // <NavigationContainer>
        <BottomTabAndroid.Navigator screenOptions={({ route }) => ({

          
          tabBarIcon: ({ color, focused }) => {
            let iconName: string = ''
            switch (route.name) {
              case 'ExploreScreen':
                iconName = 'search-outline'
                break;
              case 'FavoritesScreen':
                iconName = 'heart-outline'
                break;
              case 'TravelsScreen':
                iconName = 'home'
                break;
              case 'MessagesScreen':
                iconName = 'chatbox-outline'
                break;
              case 'ProfileScreen':
                iconName = 'person-circle-sharp'
                break;
              default:
                break;
            }
  
            return <Icon name={iconName} color={color} size={25}></Icon>
          },
          tabBarColor: '#ffff',
          
        })}
          activeColor='#F50B0B'
          sceneAnimationType='shifting'
          compact={false}
          style={{ backgroundColor: 'red', }}
  
          sceneAnimationEnabled={true}
          shifting={false}
          labeled={false}
          barStyle={{
            backgroundColor: '#ffff',
            elevation: 2,
            borderTopWidth: 0.9,
            borderColor: 'rgba(0,0,0,0.05)'
            
          }}>
  
          <BottomTabAndroid.Screen name='ExploreScreen' component={TopTabsRoutes}  />
          <BottomTabAndroid.Screen name='FavoritesScreen' component={FavoritesScreen} />
          <BottomTabAndroid.Screen name='TravelsScreen' component={TravelsScreen} />
          <BottomTabAndroid.Screen name='MessagesScreen' component={MessagesScreen} />
          <BottomTabAndroid.Screen name='ProfileScreen' component={ProfileScreen} />
        </BottomTabAndroid.Navigator>
      // </NavigationContainer>
    )
  }