import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';



export const  ComponentsStyles = StyleSheet.create({
    BackButtomContainer: {
        position: 'absolute',
        top: hp('5%'),
     
        width: 46,
        height: 46,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:999
      },
      IconBackButtom: {
        fontSize: 35,
        color:'#000b28',
        fontWeight: 'bold'
    
      },
      safeArea: {
        flex: 1,
        backgroundColor: 'white'
      },
      title: {
        fontSize: wp('8%'),
        color:'#000b28',
        marginTop: hp('14%'),
        alignSelf: 'center',
        fontFamily: 'QuidFont-Bold'
    },
    buttonLogOrReg: {
      backgroundColor:'#000b28',
      width: wp('95%'),
      height: hp('7%'),
      borderRadius: 15,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: hp('1%')
    },
    textInfo: {
      marginTop: hp('2%'),
      fontFamily: 'Roboto_Regular',
      fontStyle: 'normal',
      lineHeight: 28,
      letterSpacing: -0.29,
      color:'#000b28',
      fontSize: 19,
      alignSelf: 'center',

  },
  textContainer: {
    paddingHorizontal: wp('3%')
  },
})