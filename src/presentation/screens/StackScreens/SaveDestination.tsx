import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GeneralButtonSTComponent from '../../components/GeneralButtonSTComponent';
import { ComponentsStyles } from '../../themes/ComponentsStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelectDate from '../../components/ModalSelectDate';
import ViewsAwesomeScreens from '../TopTapsScreens/ViewsAwesomeScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SaveDestination = ({ navigation, route }: any) => {

  const { anfitrion, city, descripcion, descripcionLong, id, imagen, precio, rango, titulo } = route.params.item;
  const [modalVisible, setModalVisible] = useState(false);
  const [datesStorage, setDatesStorage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  console.log(datesStorage);
  
  const [saveStorage, setSaveStorage] = useState({
    'anfitrion': anfitrion,
    'city': city,
    'descripcion': descripcion,
    'descripcionLong': descripcionLong,
    'id': id,
    'imagen': imagen,
    'precio': precio,
    'rango': rango,
    'titulo': titulo,
    'date': datesStorage
  });


  useEffect(() => {
    getDates()
  }, [modalVisible]);


  const getDates = async () => {
    const datesStorage = await AsyncStorage.getItem('Fechas');
    const inputString = datesStorage;
    const cleanedString = inputString?.replace(/[\[\]"]+/g, '');
    // console.log(cleanedString);
    if (cleanedString !== undefined) {
      setDatesStorage(cleanedString)
    }
    // setDatesStorage(datesStorage)
  }

  const sendData = async () => {
    setIsLoading(true);
    const save = await AsyncStorage.setItem('reserva', JSON.stringify(saveStorage))
    setIsLoading(false);
    navigation.pop();

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar translucent backgroundColor={'rgba(255,255,256, 0.2)'} />

      {/* SCROLL VIEW */}
      <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>

        {/* BOTTON RETROCEDER */}
        <GeneralButtonSTComponent container={{ ...ComponentsStyles.BackButtomContainer, left: wp('5%'), }} IconName='chevron-back' IconButtonStyle={{ ...ComponentsStyles.IconBackButtom }} navigation={() => navigation.pop()} />

        {/* CONTENEDOR GENERAL  */}
        <View style={{ ...styles.container }}>

          {/* IMAGEN DE PORTADA DEL HOTEL */}
          <Image source={imagen} style={{ ...styles.imageDescription }} resizeMode='contain' />

          {/* CONTENEDOR DE INFORMACION  */}
          <View style={{ marginTop: hp('2%'), paddingHorizontal: wp('5%') }}>
            <Text style={{ ...styles.nameCitie }}>{titulo}</Text>
            <Text style={{ ...styles.generalText }}>
              Descripcion:
            </Text>
            <Text style={{ ...styles.generalText }}>{descripcion}</Text>
            <Text style={{ ...styles.generalText }}>Entre el {rango} de noviembre</Text>

            <View style={{ flex: 1, borderWidth: 0.2, marginBottom: hp('2%') }} />

            <Text style={{ ...styles.generalText }}>Anfitrion: {anfitrion}</Text>
            <Text style={{ ...styles.generalText }}>Ubicacion en: {city}
              <Icon name='location' size={20} ></Icon></Text>

            <Text style={{ ...styles.generalText }}>Detalles</Text>
            <Text style={{ ...styles.generalText }}>{descripcionLong}</Text>
          </View>

        </View>

        <View style={{ ...styles.containerAddDate }}>
          <View style={{ ...styles.boxAddDate }}>
            {
              (datesStorage) ?
                <>
                  <Text style={{ ...styles.generalText }} >Agregar fecha de reserva</Text>
                  <TouchableOpacity style={{ padding: 5 }} onPress={() => setModalVisible(true)} >
                    <Icon name='add-circle' style={{ ...styles.addNewDate }}></Icon>
                  </TouchableOpacity>
                </>
                :
                <>
                  <Text style={{ ...styles.generalText }} >Editar fecha de reserva</Text>
                  <TouchableOpacity style={{ padding: 5 }} onPress={() => setModalVisible(true)} >
                    <Icon name='pencil' style={{ ...styles.addNewDate }}></Icon>
                  </TouchableOpacity>
                </>
            }

          </View>

        </View>

        <View style={{ marginBottom: hp('25%') }} />

      </ScrollView>

{
(datesStorage) &&
//  {/* BOTTON RESERVAR */}
      <TouchableOpacity style={{ ...styles.buttonSave }} onPress={() => sendData()}
      >

        {
          (isLoading)
            ? <ActivityIndicator size={20} color={'#fff'} />
            : <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Guardar</Text>
        }
      </TouchableOpacity>

}
     

      <ModalSelectDate setModalUseState={setModalVisible} modalUseState={modalVisible} />



    </SafeAreaView>
  )
}

export default SaveDestination

const styles = StyleSheet.create({
  addNewDate: {
    fontSize: 30,
    color: '#000b28'
  },
  boxAddDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonSave: {
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: '#000b28',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: hp('3%')
  },
  containerAddDate: {
    marginTop: '10%',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,


  },
  safeArea: {
    flex: 1, backgroundColor: 'white'
  },
  container: {
    paddingHorizontal: wp('1%')
  },
  imageDescription: {
    marginTop: hp('4%'),
    alignSelf: 'center',
    width: '100%',
    height: hp('30%'),
    borderRadius: 25
  },
  generalText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'gray',
    marginVertical: hp('0.5%')
  },
  containerU: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameCitie: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: hp('2%')
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedRange: {
    marginTop: 20,
  },
})