import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NationalParksScreen = () => {
  const [datosDelLocalStorage, setDatosDelLocalStorage] = useState(null);


  useEffect(() => {
    getDates()
  }, []);


  const getDates = async () => {
    const datesStorage = await AsyncStorage.getItem('reserva');
    console.log(`LOG DESDE NATIONALPARKS ${datesStorage}`);
    if (datesStorage) {
      const datosComoObjeto = JSON.parse(datesStorage);
      setDatosDelLocalStorage(datosComoObjeto);
    }
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

      <Text>{JSON.stringify(datosDelLocalStorage, null, 10)}</Text>

    </View>
  )
}

export default NationalParksScreen

const styles = StyleSheet.create({})