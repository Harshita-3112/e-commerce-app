import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import { useNavigation } from '@react-navigation/native';


const Orders = ({ item, index }) => {

    const navigation = useNavigation();
    return (
        <View>
            <Header title={'Orders'} />
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({})