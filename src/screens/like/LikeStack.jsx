import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LikeScreen from './LikeScreen';

const Stack=createStackNavigator()

const LikeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='LikeMainScreen' component={LikeScreen} 
        options={{headerShown:false}}/>
    </Stack.Navigator>

  )
}

export default LikeStack

const styles = StyleSheet.create({})