import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import Modal from '../screens/modal';
import OnboardingScreen from '~/screens/onBoard/OnBoardScreen';



const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Board"
      screenOptions={{headerShown:false,
      cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}>
        <Stack.Screen name='Board' component={OnboardingScreen}/>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: 'modal', headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
