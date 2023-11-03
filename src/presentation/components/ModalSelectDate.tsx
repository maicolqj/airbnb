import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import { Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ComponentsStyles } from '../themes/ComponentsStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Alert } from 'react-native';
import { Calendar, } from 'react-native-calendars';
import { CitiesInterface } from '../../domain/GlobalInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  modalUseState: boolean,
  setModalUseState: React.Dispatch<React.SetStateAction<boolean>>
  // hotel: CitiesInterface
}
const ModalSelectDate = ({ setModalUseState, modalUseState }: Props) => {
  const [selectedDates, setSelectedDates] = useState<{ [date: string]: any }>({});
  const [isLoading, setIsLoading] = useState(false);


  const saveButtom = async() => {
    setIsLoading(true);
    await AsyncStorage.setItem('Fechas', JSON.stringify(selectedDatesArray))
    // console.log('si guardo las fechas');
    setIsLoading(false);
    setModalUseState(false)

  }

  const handleDayPress = (day: any) => {
    if (Object.keys(selectedDates).length === 2) {
      setSelectedDates({ [day.dateString]: { selected: true } });
    } else {
      setSelectedDates({
        ...selectedDates,
        [day.dateString]: {
          selected: !selectedDates[day.dateString]
        },
      });
    }
  };

  const selectedDatesArray = Object.entries(selectedDates)
    .filter(([date, { selected }]) => selected)
    .map(([date]) => date);

  return (

    <Modal
      animationType="slide"
      transparent={false}
      style={{ backgroundColor: 'blue', paddingVertical: hp('10%'), borderRadius: 40 }}
      visible={modalUseState}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalUseState(false);
      }}
    >

      {/* CONTENEDOR GENERAL */}
      <View style={{ flex: 1, backgroundColor: 'white', }}>

        {/* BOTON PARA CERRAR MODAL */}
        <TouchableOpacity style={{
          ...styles.backButtomContainer,
        }} onPress={() => setModalUseState(false)} activeOpacity={0.8}>
          <Icon name='close' style={{ ...ComponentsStyles.IconBackButtom }}></Icon>
        </TouchableOpacity>

        {/* TITULO */}
        <View style={{ ...styles.titleModal, justifyContent: 'center' }}>
          <Text style={{ ...styles.titleText }}>SELECCIONE LAS FECHAS</Text>
        </View>

        {/* CONTENEDOR CALENDARIO */}
        <View style={{ ...styles.dateContainer }}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={selectedDates}
            style={{ ...styles.calendar }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#000b28',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e',
            }}
          />


        </View>

        {/* TEXTO DE EJEMPLO DE LAS FECHAS SELECCIONADAS    */}
        {
          (selectedDatesArray !== null || selectedDatesArray !== '') &&
          <View style={{ ...styles.textExample }}>
            <Text style={{ color: '#6C6565', fontWeight: '900', fontSize: 20, alignSelf: 'center' }}>Las fechas de la reserva son: </Text>
            <Text style={{ color: '#6C6565', fontWeight: '600', fontSize: 18, alignSelf: 'center' }}>{JSON.stringify(selectedDatesArray)} </Text>
          </View>
        }

        {/* BOTTON DE GGUARDAR LAS FECHAS */}
        <TouchableOpacity
          onPress={() => saveButtom()}
          activeOpacity={0.8}
          style={{ ...styles.buttomSave }}>

          {
            (isLoading)
              ? <ActivityIndicator size={20} color={'#fff'} />
              : <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Guardar</Text>
          }

        </TouchableOpacity>
      </View>


    </Modal>

  )

}
export default ModalSelectDate;


const styles = StyleSheet.create({
  calendar: {
    borderWidth: 0,
    borderColor: 'gray',
    height: 350,
    position: 'absolute',
    top: hp('14%'),
    width: '100%'
  },
  dateIndicator: {
    fontSize: 25,
    color: 'gray',
    fontWeight: '600',
    alignSelf: 'center'
  },
  modalContainer: {

  },
  titleModal: {
    height: hp('7%'),
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: hp('6%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  dateContainer: {
    paddingHorizontal: 2
  },
  backButtomContainer: {
    position: 'absolute',
    top: hp('0%'),
    right: wp('5%'),
    width: 46,
    height: 46,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  buttomSave: {
    backgroundColor: '#00adf5',
    padding: 10,
    borderRadius: 5,
    bottom: 10,
    position: 'absolute',
    zIndex: 999,
    width: '95%',
    alignSelf: 'center',
    height: 50
  },
  textExample: {
    backgroundColor: '#ffff',
    padding: 10,
    borderRadius: 5,
    bottom: hp('20%'),
    position: 'absolute',
    zIndex: 999,
    width: '95%',
    alignSelf: 'center',
    height: 50
  },
  titleText: {
    color: '#6C6565',
    fontWeight: '900',
    fontSize: 20,
    alignSelf: 'center'
  }
});