import { Animated, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialTopTabNavigationOptions, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewsAwesomeScreens from '../../screens/TopTapsScreens/ViewsAwesomeScreens';
import NationalParksScreen from '../../screens/TopTapsScreens/NationalParksScreen';
import SmallHousesScreen from '../../screens/TopTapsScreens/SmallHousesScreen';
import CastlesScreen from '../../screens/TopTapsScreens/CastlesScreen';
import HousesHeightsScreen from '../../screens/TopTapsScreens/HousesHeightsScreen';
import HousesWithPoolsScreen from '../../screens/TopTapsScreens/HousesWithPoolsScreen';


export type RootTopTabParams = {
    ViewsAwesomeScreens: undefined
    NationalParksScreen: undefined
    SmallHousesScreen: undefined
    CastlesScreen: undefined
    HousesHeightsScreen: undefined
    HousesWithPoolsScreen: undefined
    BottomTapsRoutes: undefined
    StackInitialRoutes: undefined
}

const TopTab = createMaterialTopTabNavigator<RootTopTabParams>();

const TopTabsRoutes = () => {
    
    
    return (
        //tabBar={props => <CustomTabBar {...props} />}
        <TopTab.Navigator

        
        
            screenOptions={({ route }) => ({
                tabStyle: { width: 'auto' },
                tabBarLabel: () => null,
                tabBarStyle: {
                    width: '200%',
                },
                animationEnabled: true,  
                tabBarPressColor: 'rgba( 0, 11, 40, 0.25 )',
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = ''
                    switch (route.name) {
                        case 'ViewsAwesomeScreens':
                            iconName = 'search-outline'
                            break;
                        case 'NationalParksScreen':
                            iconName = 'heart-outline'
                            break;
                        case 'SmallHousesScreen':
                            iconName = 'home'
                            break;
                        case 'CastlesScreen':
                            iconName = 'chatbox-outline'
                            break;
                        case 'HousesHeightsScreen':
                            iconName = 'person-circle-sharp'
                            break;
                        case 'HousesWithPoolsScreen':
                            iconName = 'person-circle-sharp'
                            break;
                        default:
                            break;
                    }

                    return <Icon name={iconName} color={color} size={25}></Icon>
                },
                
            })

            }

        >
            <TopTab.Screen name="ViewsAwesomeScreens" component={ViewsAwesomeScreens} />
            <TopTab.Screen name="NationalParksScreen" component={NationalParksScreen} />
            <TopTab.Screen name="SmallHousesScreen" component={SmallHousesScreen} />
            <TopTab.Screen name="CastlesScreen" component={CastlesScreen} />
            <TopTab.Screen name="HousesHeightsScreen" component={HousesHeightsScreen} />
            <TopTab.Screen name="HousesWithPoolsScreen" component={HousesWithPoolsScreen} />
        </TopTab.Navigator >
    );
}
export default TopTabsRoutes

const styles = StyleSheet.create({

})