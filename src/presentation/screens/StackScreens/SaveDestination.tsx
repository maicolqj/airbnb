import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GeneralButtonSTComponent from '../../components/GeneralButtonSTComponent';
import { ComponentsStyles } from '../../themes/ComponentsStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelectDate from '../../components/ModalSelectDate';
import ViewsAwesomeScreens from '../TopTapsScreens/ViewsAwesomeScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CitiesInterface } from '../../../domain/GlobalInterfaces';
import useAlert from '../../hooks/useAlert';



const SaveDestination = ({ navigation, route }: any) => {

  const { anfitrion, city, descripcion, descripcionLong, id, imagen, precio, rango, titulo } = route.params.item;


  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<CitiesInterface[]>([]);
  const [datesStorage, setDatesStorage] = useState('');
  const { showMessageAlert, messageAlert } = useAlert();


  const datosArray = [anfitrion, city, descripcion, descripcionLong, id, imagen, precio, rango, titulo];

  // console.log(`datosArray ${datosArray}`);
  
  datosArray.push(datesStorage);
  const datosArrayJSON = JSON.stringify(datosArray);

  // console.log(`datosArrayJSON ${datosArrayJSON}`);

  const handleDataFromModal = (datesSelected: any) => {

    setDatesStorage(datesSelected);
  }



  const SaveData = async () => {

    try {
      setIsLoading(true);
      const getList = await AsyncStorage.getItem('ListaDeFechas');
      // console.log(`getList ${getList}`);

      if (getList) {
        const existingArray = JSON.parse(getList);
        existingArray.push(datosArrayJSON);
        // console.log(`existingArray ${existingArray}`);
        console.log(`la lista si exite`);

        const listDates = await AsyncStorage.setItem('ListaDeFechas', JSON.stringify(existingArray))
        // console.log(`datosArrayJSON ${datosArrayJSON}`);
        
      } else {
        const saveNew = await AsyncStorage.setItem('ListaDeFechas', JSON.stringify([datosArrayJSON]));
        // console.log(`saveNew${saveNew}`);
        console.log(`la lista no exite`);

      }
    } catch (error) {
      console.error('Error al guardar en el Local Storage', error);
    }
    finally {
      setIsLoading(false);
      showMessageAlert('dato guardado con exito');
      navigation.pop();
    }
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


        {/* SECCION PARA SELECCIONAR O EDITAR FECHA */}
        <View style={{ ...styles.containerAddDate }}>
          <View style={{ ...styles.boxAddDate }}>
            {
              (!datesStorage) ?
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
        <TouchableOpacity style={{ ...styles.buttonSave }} onPress={() => SaveData()}
        >
          {
            (isLoading)
              ? <ActivityIndicator size={20} color={'#fff'} />
              : <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Guardar</Text>
          }
        </TouchableOpacity>

      }

      {/* MODAL CALENDARIO */}
      <ModalSelectDate setModalUseState={setModalVisible} modalUseState={modalVisible} sendDataToMainScreen={handleDataFromModal} />
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