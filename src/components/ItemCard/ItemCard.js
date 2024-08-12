import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../theme/Colors'
import { useNavigation } from '@react-navigation/native'



const ItemCard = ({ title, type, price }) => {

    const navigation = useNavigation()

    const handleProductDetails = () => {
        navigation.navigate('ProductDetail')
    }

    // const setCart = useConfigStore(state => state.setCart);

    // const addToCart = () => {
    //     setCart(item)
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleProductDetails} style={{ height: scale(100), borderRadius: scale(12), backgroundColor: 'blue', }}>
                <Image source={require('../../asstes/images/fn3.jpg')} style={{ height: '100%', width: 'auto', borderRadius: scale(8) }} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: scale(6) }}>
                    <Text style={styles.text2}>{type}</Text>
                    <Text style={styles.text3}>{price}</Text>
                </View>
                <TouchableOpacity style={{ marginTop: scale(10) }}>
                    <AntDesign name='pluscircle' size={26} color={COLORS.green} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    container: {
        height: scale(180),
        width: '46%',
        borderRadius: scale(10),
        backgroundColor: COLORS.lightBlue,
        padding: scale(7),
        // marginHorizontal: scale(18),
        marginTop: scale(10),

    },
    text: {
        fontWeight: '600',
        color: COLORS.black,
        marginTop: scale(6),
        fontSize: 15
    },
    text2: {
        fontSize: 10,
        fontWeight: '500',

    },
    text3: {
        fontWeight: '700',
        color: COLORS.dullBlack

    }
})