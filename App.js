import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login/Login';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/screens/SignUp/SignUp';
import BottomTabNavigator from './src/screens/BottomTabNavigator/BottomTabNavigator';
import Home from './src/screens/Home/Home';
import Cart from './src/screens/Cart/Cart';
import Orders from './src/screens/Orders/Orders';
import ProductDetail from './src/screens/ProductDetail/ProductDetail';
import Favorites from './src/screens/Favorites/Favorites';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#f2f2f2'} barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={'Login'} component={Login} /> */}
        {/* <Stack.Screen name={'SignUp'} component={SignUp} /> */}
        <Stack.Screen
          name={'BottomTabNavigator'}
          component={BottomTabNavigator}
        />
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Cart'} component={Cart} />
        <Stack.Screen name={'Orders'} component={Orders} />
        <Stack.Screen name={'ProductDetail'} component={ProductDetail} />
        <Stack.Screen name={'Favorites'} component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
