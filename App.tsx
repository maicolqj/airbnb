import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef } from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottonTapRoutesAndroid } from './src/presentation/navigation/BottomTapsRoutes/BottomTapsRoutes';
import StackInitialRoutes from './src/presentation/navigation/StackRoutes/StackInitialRoutes';


const App = () => {



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <BottonTapRoutesAndroid /> */}
      <StackInitialRoutes/>
    </GestureHandlerRootView>
  )
}

export default App


