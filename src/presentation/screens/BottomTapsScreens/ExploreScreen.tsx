import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TopTabsRoutes from '../../navigation/TopTapsRoutes/TopTabsRoutes';


const ExploreScreen = () => {

    const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints =  ['25%', '50%'];

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff',}}>
      <StatusBar translucent backgroundColor={'rgba(255,255,255,0.10)'} />
      <View style={{ ...styles.buttonSearchAndFilter }}>
        <TouchableOpacity style={{ ...styles.buttonContent }}>
          <Icon name='search' style={{ ...styles.iconButton }}></Icon>
          <View>
            <Text style={{ ...styles.questionButton }}>¿A dónde quieres ir?</Text>
            <Text style={{ ...styles.descriptionnButton }}>Cualquier lugar - Cualquier semana - Cua</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.buttonFilter }}>
          <Icon name='options' style={{ ...styles.buttomOption }}></Icon>
        </TouchableOpacity>
      </View>

      <TopTabsRoutes />

    </SafeAreaView>
  )
}

export default ExploreScreen
const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginRight: wp('3%'),
    paddingVertical: wp('3%'),
    backgroundColor: 'white',
    width: wp('75%'),
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonFilter: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 2,
    marginHorizontal: wp('2%')
  },
  buttomOption: {
    fontSize: 25,
    padding: 5,
    color: '#000'
  },
  buttonSearchAndFilter: {
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    justifyContent: 'space-evenly',
    marginTop: wp('7%')

  },
  container: {
    backgroundColor: 'white',
  },
  descriptionnButton: {
    fontSize: 12.6,
    color: '#000'
  },
  iconButton: {
    marginRight: wp('3%'),
    fontSize: 28,
    color: '#000'
  },
  questionButton: {
    fontWeight: '800',
    color: '#000'
  },
  tabBarsStyles: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: wp('4%'),
    width: 20,

  }

})
