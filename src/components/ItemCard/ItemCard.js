import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ItemCard = () => {
    return (
        <View style={{ height: scale(180), width: scale(180), borderRadius: scale(12), backgroundColor: "lightgrey", padding: scale(7), marginHorizontal: scale(18), marginTop: scale(10) }}>
            <View style={{ height: scale(100), borderRadius: scale(12), backgroundColor: 'blue', }}>

            </View>
            <Text>text here</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: scale(6) }}>
                    <Text>Playful Interiors</Text>
                    <Text>$79.99</Text>
                </View>
                <View style={{ marginTop: scale(10) }}>
                    <AntDesign name='pluscircle' size={26} color={'black'} />
                </View>
            </View>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({})