import { Image, StyleSheet, Text, TouchableOpacity, View, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NationalParksScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    loadListFromLocalStorage();
  }, []);


  const loadListFromLocalStorage = async () => {
    try {
      const getList = await AsyncStorage.getItem('ListaDeFechas');
      if (getList) {
        setList(JSON.parse(getList));

        
      }
    } catch (error) {
      console.error('Error al cargar desde el Local Storage', error);
    }
  };


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadListFromLocalStorage()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);




  return (

    
    <SafeAreaView style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('20%'), }} >
          <View>
            {list.map((item, index) => (

              <Text key={index} style={{ color: '#000', fontSize: 12,  zIndex: 99, }}>{item}</Text>
            ))}
          </View>
        </View >
      </ScrollView>
    </SafeAreaView>

  )
}

export default NationalParksScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'translucent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



