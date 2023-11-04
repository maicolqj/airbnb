import { StyleSheet, Text, View, TouchableOpacity, ImageSourcePropType, Image } from 'react-native';
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Props {
    onPress: () => void;
    id: string
    imagen: ImageSourcePropType;
    titulo: string;
    descripcion: string;
    city: string
    rango: string;
    precio: number;
    iva: Boolean
}


const formatNumber = (num: number, decimals: number = 2): string => {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const CardComponent = ({ onPress, city, descripcion, id, imagen, precio, rango, titulo, iva }: Props) => {
    const impuesto: number = precio * 0.19;
    const valorTotalsinmpuesto =( precio - impuesto );
    let formattedNumber = formatNumber(precio);
    const formatPriceSI = formatNumber(valorTotalsinmpuesto);


    return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} activeOpacity={0.8} onPress={onPress} >

            <View style={{ width: '100%', marginBottom: hp('2%') }}>
                <TouchableOpacity style={{ position: 'absolute', top: '4%', right: '4%', padding: 5, zIndex: 999 }} activeOpacity={0.8}>
                    <Icon name='heart-outline' size={30}></Icon>
                </TouchableOpacity>
                <Image source={imagen} style={{ ...styles.imageCities }} resizeMode='cover' />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '900', marginTop: 2 }}>{titulo}</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '400', marginTop: 2 }}>{descripcion}</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', marginTop: 2 }}>{city}</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '300', marginTop: 2 }}>{rango}</Text>
                        {
                            (iva)
                                ? <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginTop: 2 }}>
                                    $ {formattedNumber} COP
                                </Text>
                                : <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginTop: 2 }}>
                                    $ {formatPriceSI} COP
                                </Text>

                        }
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Icon name='star' style={{ color: '#000', fontSize: 15 }}></Icon>
                        <Text style={{ color: '#000', fontSize: 15 }}>4.5</Text>
                    </View>
                </View>
            </View>



        </TouchableOpacity>
    )
}

export default CardComponent

const styles = StyleSheet.create({
    imageCities: {
        width: '100%',
        height: hp('41%'),
        borderRadius: 25
    },

})