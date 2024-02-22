import React from 'react';
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '~/ThemeContext';
import TopTabNavigatore from './TopTabNavigatore';
import HomeHeader from './components/HomeHeader';

const HomeScreen = () => {
  const navigation=useNavigation()
    const { theme, toggleTheme } = useTheme();




  return (
    <>
    <HomeHeader/>
   <TopTabNavigatore/>
    </>
  )
}

export default HomeScreen
