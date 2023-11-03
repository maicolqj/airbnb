import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'

interface Props {
  container: StyleProp<ViewStyle>
  IconButtonStyle: StyleProp<TextStyle>
  IconName: string,
  navigation?: () => void
  function?: () => void
}


const GeneralButtonSTComponent = ({IconButtonStyle = {}, container = {}, IconName, navigation}: Props) => {
  return (
    <TouchableOpacity style={container} onPress={navigation} activeOpacity={0.8}>
      <Icon name={IconName} style={IconButtonStyle}></Icon>
    </TouchableOpacity>
  )
}

export default GeneralButtonSTComponent

const styles = StyleSheet.create({})