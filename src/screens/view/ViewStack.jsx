import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ViewScreen from './ViewScreen';

const Stack=createStackNavigator()

const ViewStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='ViewMainScreen' component={ViewScreen} 
        options={{headerShown:false}}/>
    </Stack.Navigator>

  )
}

export default ViewStack

const styles = StyleSheet.create({})