import React from 'react';
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '~/ThemeContext';

const HomeScreen = () => {
  const navigation=useNavigation()
    const { theme, toggleTheme } = useTheme();

    console.log(theme)



  return (
   <View>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque consequuntur numquam veritatis ullam, quidem ipsam veniam est incidunt praesentium molestiae enim voluptatem velit temporibus accusamus aperiam quaerat nesciunt expedita.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque consequuntur numquam veritatis ullam, quidem ipsam veniam est incidunt praesentium molestiae enim voluptatem velit temporibus accusamus aperiam quaerat nesciunt expedita.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque consequuntur numquam veritatis ullam, quidem ipsam veniam est incidunt praesentium molestiae enim voluptatem velit temporibus accusamus aperiam quaerat nesciunt expedita.
    </Text>
   </View>
  )
}

export default HomeScreen
