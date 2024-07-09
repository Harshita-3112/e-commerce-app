import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CartItems from '../../components/CartItems/CartItems'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { scale } from 'react-native-size-matters'
import { COLORS } from '../../theme/Colors'
import { forSlideLeft } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators'
import CTAButton from '../../components/CTAButton/CTAButton'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const Cart = () => {

    const navigation = useNavigation();

    return (
        <View >

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name='leftcircle' size={22} color={COLORS.dullBlack} />
                </TouchableOpacity>
                <Text style={styles.text}>Cart</Text>
            </View>
            <View style={{ marginTop: scale(12) }}>
                <CartItems />
                <CartItems />
                <CartItems />
                <CartItems />
            </View>
            <Text style={styles.text2}>Order Info</Text>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 12, color: COLORS.grey, fontWeight: '600' }}>Subtotal</Text>
                <Text style={{ fontSize: 12, color: COLORS.grey, fontWeight: '600' }}>$677.78</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 12, color: COLORS.grey, fontWeight: '600' }}>Total</Text>
                <Text style={{ color: 'black', fontWeight: '600' }}>$5099.93</Text>
            </View>

            <TouchableOpacity>
                <CTAButton
                    title={'CHECkOUT $5099.93 '}
                    backgroundColor={COLORS.green}
                    borderRadius={10}
                    titleColor={COLORS.white}
                    marginTop={20}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: scale(18),
        marginTop: scale(16)
    },
    text: {
        color: "#343434",
        fontSize: scale(18),

        marginLeft: scale(16),
        fontWeight: '700'
    },
    text2: {
        color: '#343434',
        marginHorizontal: scale(18),
        marginTop: scale(50),
        fontWeight: '700'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scale(18),
        marginTop: scale(20)

    }
})