import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';




const Stack=createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeMainScreen' component={HomeScreen}
        options={{headerShown:false}} />
        <Stack.Screen name='HomeSecondScreen' component={SecondScreen}

        options={{headerShown:false,
            presentation:'card'
        // cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS
    }}
         />
    </Stack.Navigator>

  )
}

export default HomeStack

const styles = StyleSheet.create({})