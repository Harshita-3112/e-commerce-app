import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { COLORS } from '../../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Header = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='leftcircle' size={22} color={COLORS.dullBlack} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

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
        fontWeight: '700',
    }
})