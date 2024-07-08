import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../theme/Colors'

const CartItems = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', padding: 8 }}>
                <View style={{ height: scale(55), width: scale(70), backgroundColor: 'yellow', borderRadius: scale(4) }}>

                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Bedroom Dressser</Text>
                    <Text>Dream Furniture</Text>
                    <Text>$599.67</Text>
                </View>

            </View>


            <View style={{ flex: 1, padding: 8 }}>
                <AntDesign name='delete' size={15} color={'red'} style={styles.deleteButton} />
                <View style={{ height: scale(18), width: scale(70), borderRadius: scale(10), backgroundColor: COLORS.green, marginTop: scale(30), marginLeft: 24 }}>
                    <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Checkout</Text>
                </View>

            </View>
        </View>
    )
}

export default CartItems

const styles = StyleSheet.create({
    container: {
        height: scale(80),
        width: 'auto',
        marginHorizontal: scale(18),
        backgroundColor: 'white',
        borderRadius: scale(6),
        marginTop: scale(16),
        flexDirection: 'row',
        overflow: 'hidden'

    },
    deleteButton: {
        alignSelf: 'flex-end'
    }
})









