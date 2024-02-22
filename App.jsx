import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import RootStack from './src/navigation';
import { Text } from 'react-native';
import { ThemeProvider } from '~/ThemeContext';
import { StatusBar } from 'react-native';
import { View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 ">

    
    <ThemeProvider>

     <RootStack />

       <StatusBar backgroundColor="#FF6584" barStyle="light-content" />


    </ThemeProvider>
   
    </SafeAreaView>
  )

}
