import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import { Body, Heading, SubBody, Subheading } from '../../theme/fonts';
import { COLORS } from '../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const User = () => {

  const DATA = [
    {
      icon: <AntDesign name="hearto" size={18} color={COLORS.black} />,
      title: 'Favorites',
    },
    {
      icon: <AntDesign name="car" size={18} color={COLORS.black} />,
      title: 'Orders',
      onPress: () => handleOrders()
    },
    {
      icon: <AntDesign name="shoppingcart" size={18} color={COLORS.black} />,
      title: 'Carts',
      onPress: () => handleCartItems()

    },
    {
      icon: (
        <MaterialCommunityIcons name="cached" size={18} color={COLORS.black} />
      ),
      title: 'Clear Cache',
    },
    {
      icon: <AntDesign name="deleteuser" size={18} color={COLORS.black} />,
      title: 'Delete Account',
    },
    {
      icon: <AntDesign name="logout" size={18} color={COLORS.black} />,
      title: 'Logout',
      onPress: () => handleLogout()
    },
  ];

  const handleLogout = () => {
    console.log('logout pressed');
  }

  const navigation = useNavigation();

  const handleCartItems = () => {
    navigation.navigate('Cart')
  }

  const handleOrders = () => {
    navigation.navigate('Orders')
  }
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={item.onPress}  >
        <View
          style={{
            flexDirection: 'row',

            marginHorizontal: scale(18),
            marginTop: scale(20),
          }}>
          {item.icon}
          <Body style={{ marginLeft: scale(20) }}>{item.title}</Body>
        </View>
        <View
          style={{
            borderWidth: 0.3,
            borderColor: COLORS.grey2,
            marginHorizontal: scale(18),
            marginTop: scale(14),
          }}></View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../asstes/images/space.jpg')}
        style={{
          resizeMode: 'cover',
          height: scale(190),
          width: '100%',
        }}
      />

      <Image
        source={require('../../asstes/images/profile.jpeg')}
        style={{
          resizeMode: 'cover',
          height: scale(90),
          width: scale(90),
          borderRadius: scale(45),
          backgroundColor: 'red',
          alignSelf: 'center',
          margin: -55,
        }}
      />
      <Heading style={{ marginTop: 60, alignSelf: 'center', color: '#2A4D50' }}>
        John Doe
      </Heading>
      <View
        style={{
          height: scale(20),
          width: '45%',
          marginHorizontal: scale(18),
          backgroundColor: COLORS.lightBlue,
          borderRadius: scale(12),
          alignSelf: 'center',
          borderColor: COLORS.grey,
          borderWidth: 0.3,
        }}></View>

      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});


