import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import FavScreen from './FavScreen';

const Stack=createStackNavigator()

const FavStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='FavMainScreen' component={FavScreen}
        options={{headerShown:false}} />
    </Stack.Navigator>

  )
}

export default FavStack

const styles = StyleSheet.create({})