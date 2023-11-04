import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';


interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void

}

const CustonSwitchComponent = ({ isOn, onChange }: Props) => {

    // const { theme } = useContext(ThemeContext);
    const [isEnable, setisEnable] = useState(Boolean)

    useEffect(() => {
        setisEnable(isOn)
    }, [isOn])
    

    const toggleSwitch = () => {
        setisEnable(!isEnable);
        onChange(!isEnable)
    }

   
    return (
        <Switch
            trackColor={{ false: '#ccc', true: '#07E82F' }}
            thumbColor={(Platform.OS === 'android') ? 'gray': 'red'}
            value={isEnable}
            onValueChange={toggleSwitch}
        />
    )
}

export default CustonSwitchComponent

const styles = StyleSheet.create({})