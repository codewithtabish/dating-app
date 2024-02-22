import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './ChatScreen';

const Stack=createStackNavigator()

const ChatStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='ChatMainScreen' component={ChatScreen}
        options={{headerShown:false}} />
    </Stack.Navigator>

  )
}

export default ChatStack

const styles = StyleSheet.create({})