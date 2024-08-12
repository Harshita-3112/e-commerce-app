import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from '../Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Search/Search';
import User from '../User/User';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen options={{
        tabBarIcon: () => (
          <AntDesign name={'home'} size={22} color={'#000'} />
        )
      }} name="Home" component={Home} />

      <Tab.Screen options={{
        tabBarIcon: () => (
          <AntDesign name={'search1'} size={22} color={'#000'} />
        )
      }}
        name="Search" component={Search} />

      <Tab.Screen options={{
        tabBarIcon: () => (
          <AntDesign name={'user'} size={22} color={'#000'} />
        )
      }}
        name="User" component={User} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
