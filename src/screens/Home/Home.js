import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../theme/Colors';
import { s, scale } from 'react-native-size-matters';
import { Heading, Subheading } from '../../theme/fonts';
import ItemCard from '../../components/ItemCard/ItemCard';
import { useNavigation } from '@react-navigation/native';



const Home = () => {

  const renderProducts = ({ item, index }) => {
    return (
      <ItemCard title={item.title} type={item.type} price={item.price} />
    );
  };



  const navigation = useNavigation();

  const handleCart = () => {
    navigation.navigate('Cart')
  }


  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.header}>
        <EvilIcons name="location" size={24} color={COLORS.black} />
        <Subheading style={{ color: COLORS.grey }}>New York</Subheading>
        <TouchableOpacity onPress={handleCart}>
          <AntDesign name="shoppingcart" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: scale(18), marginTop: scale(10) }}>
        <Heading style={{ color: COLORS.black, fontSize: scale(24) }}>
          Find The Most
        </Heading>
        <Heading style={{ color: COLORS.green, fontSize: scale(24) }}>
          Luxurious Furniture
        </Heading>
      </View>
      <View style={styles.bar}>
        <TouchableOpacity style={{ marginHorizontal: scale(10) }}>
          <AntDesign name="search1" size={20} color={COLORS.grey} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput placeholder="What are you looking for?" />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons
            name="camera-outline"
            size={scale(18)}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: scale(130),
          width: '90%',
          backgroundColor: COLORS.grey,
          borderRadius: scale(10),
          marginHorizontal: scale(18),
          marginTop: scale(22),
        }}>
        <Image source={require('../../asstes/images/fn2.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 10, }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: scale(20),
          marginHorizontal: scale(18),
        }}>
        <Heading>New Rivals</Heading>
        <MaterialIcons name="window" size={20} color={COLORS.green} />
      </View>



      <FlatList data={DATA}
        renderItem={renderProducts}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',



        }}

      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    marginTop: scale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: scale(18),
  },
  bar: {
    height: scale(40),
    width: '90%',
    backgroundColor: COLORS.lightBlue,
    borderRadius: scale(10),
    marginHorizontal: scale(18),
    marginTop: scale(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // padding: scale(10),
  },

  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
    borderRadius: scale(10),
  },
  searchBtn: {
    height: '100%',
    width: scale(40),
    borderRadius: scale(14),
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const DATA = [
  {
    title: 'Wall Furniture',
    type: 'Playful Interiors',
    price: `$799.99`,

  },


  {
    title: 'Dining Table',
    type: 'Modern Living',
    price: `$689.99`,

  },


  {
    title: 'Bunk Bed',
    type: 'Dream Furniture',
    price: `$764.09`,

  },


  {
    title: 'Glass Coffee Table',
    type: 'Garden Oasis',
    price: `$189.99`,

  },


  {
    title: 'Dining Table',
    type: 'Dream Furniture',
    price: `$539.99`,

  },


  {
    title: 'Office Desk',
    type: 'Playful Interiors',
    price: `$859.48`,

  },

]
