import 'react-native-gesture-handler';

import RootStack from './src/navigation';
import { Text } from 'react-native';
import { ThemeProvider } from '~/ThemeContext';

export default function App() {
  return (
    <>

    
    <ThemeProvider>
     <RootStack />

    </ThemeProvider>
   
    </>
  )

}
