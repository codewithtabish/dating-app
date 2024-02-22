import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '~/screens/home/HomeScreen';
import ViewScreen from '~/screens/view/ViewScreen';
import { AntDesign,Entypo,Ionicons,Fontisto,MaterialIcons ,MaterialCommunityIcons} from '@expo/vector-icons';
import FavScreen from '~/screens/fav/FavScreen';
import LikeScreen from '~/screens/like/LikeScreen';
import { useColorScheme } from "nativewind";
import HomeStack from '~/screens/home/HomeStack';
import ViewStack from '~/screens/view/ViewStack';
import LikeStack from '~/screens/like/LikeStack';
import ChatStack from '~/screens/chat/ChatStack';

const Tab = createBottomTabNavigator();



export default function TabLayout({ navigation }) {

     const { colorScheme, toggleColorScheme } = useColorScheme();


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
            headerShown:false,
          tabBarIcon: ({ color,focused }) => (

            focused?
            <Entypo name="home" size={24} color={colorScheme=="light"?"#FF6584":"#D7385E"} />:
            <AntDesign name="home" size={24} color="gray" />    
            
          ),
         tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",

        }}
      />
      <Tab.Screen
        name="ViewStack"
        component={ViewStack}
        options={{
          title: 'Views',
          headerShown:false,
              tabBarIcon: ({ color,focused }) => (

            focused?
            <AntDesign name="eye" size={24} color={colorScheme=="light"?"#FF6584":"#D7385E"} />:
            <Ionicons name="eye-outline" size={24} color="black" />
            
          ),
            tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",
        }}
      />
      <Tab.Screen
        name="FavStack"
        component={FavScreen}
        options={{
          title: 'Favourite',
            headerShown:false,
              tabBarIcon: ({ color,focused }) => (

            focused?
            <Fontisto name="favorite" size={24}   color={colorScheme=="light"?"#FF6584":"#D7385E"} />
            :
            <Fontisto name="favorite" size={24} color="black" />
            
          ),
            tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",
        }}
      />
      <Tab.Screen
        name="LikeStack"
        component={LikeStack}
        options={{
          title: 'likes',
            headerShown:false,
              tabBarIcon: ({ color,focused }) => (

            focused?
            
            
            <MaterialIcons name="favorite" size={24} color={colorScheme=="light"?"#FF6584":"#D7385E"} />:
            <MaterialIcons name="favorite-border" size={24} color="black" />
          ),
            tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          title: 'Chat',
            headerShown:false,
              tabBarIcon: ({ color,focused }) => (

            focused?
           
            
            <Ionicons name="chatbubble" size={24} color={colorScheme=="light"?"#FF6584":"#D7385E"}/>:
             <MaterialCommunityIcons name="chat-outline" size={24} color="black" />
          ),
            tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",
        }}
      />
    </Tab.Navigator>
  );
}

