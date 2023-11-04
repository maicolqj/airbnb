import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import BottomSheetComponent from '../../components/BottomSheetComponent'
import { DataLocations } from '../../../data/DataLocations'
import CustonSwitchComponent from '../../components/CustonSwitchComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import CardComponent from '../../components/CardComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ViewsAwesomeScreens = ({navigation}: any) => {
  const [isIva, setIsIva] = useState(false);

  

  return (
    <ScrollView style={{ paddingVertical: '0.5%', marginTop: '3%' }} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: wp('6%'), paddingVertical: hp('3%'), }} >
        <View style={{ ...styles.iva }}>
          <Text style={{ ...styles.snIva }}>Mostrar total sin impuestos</Text>
          <CustonSwitchComponent isOn={!isIva} onChange={() => setIsIva(!isIva)} />
        </View>


        <FlatList
          data={DataLocations}
          keyExtractor={(city) => city.id}
          renderItem={({ item }) => {
            return (
             <CardComponent imagen={item.imagen} city={item.city} descripcion={item.descripcion} id={item.id} onPress={() => navigation.navigate('SaveDestination', {item})} precio={item.precio} rango={item.rango} titulo={item.titulo} iva={isIva}/>
            )
          }}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  )
}

export default ViewsAwesomeScreens
const styles = StyleSheet.create({
  iva: {
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: hp('3.5%'),
    paddingHorizontal: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp('5%'),
    justifyContent: 'space-evenly'
  },
  snIva: {
    color: '#000',
    fontSize: 16
  }
})