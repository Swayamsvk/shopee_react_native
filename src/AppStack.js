import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import CategoryProducts from './screens/CategoryProducts';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import ProductDetails from './screens/ProductDetails';
import Products from './screens/Products';
import Splash from './screens/Splash';
import BottomTab from './tabs/BottomTab';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      <Stack.Screen name="BottomTabNavigator" component={BottomTab} />
      <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const RootStack = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      {loading ? <Splash /> : <AppStackNavigator />}
    </NavigationContainer>
  );
};

export default RootStack;
