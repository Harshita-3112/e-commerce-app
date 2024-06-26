import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../Search/Search';
import User from '../User/User';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
