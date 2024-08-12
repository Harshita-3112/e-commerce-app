import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../theme/Colors'
import { scale } from 'react-native-size-matters'


const ProductDetail = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Header />
                <TouchableOpacity>
                    <Ionicons name='heart-outline' size={26} color={COLORS.black} style={{ right: 12, marginTop: 8 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,


    }
})