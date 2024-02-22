import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Matches from './toptabs/matches/Matches';
import OnlineTab from './toptabs/online/OnlineTab';
import PopularTab from './toptabs/popular/PopularTab';
import NewestMember from './toptabs/newest/NewestMember';
import { FontAwesome6 ,SimpleLineIcons,FontAwesome5,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { View } from 'react-native';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {


  


  return (
    <Tab.Navigator
    className="bg-light-primary"
      screenOptions={{
        showIcon: true,
        showLabel: true,
        tabBarIndicatorStyle: { backgroundColor: '#ff93a8',width:'20%' ,height:4,
      },

        tabBarLabelStyle:{fontSize:11,color:"white"},
        iconStyle: { marginRight: 5 },
         tabBarStyle: { backgroundColor: '#FF6584' },
        
      }}>
      <Tab.Screen
        name="MatchesTab"
        component={Matches}
        options={{
          tabBarLabel: 'Matches',
        tabBarIcon: ({ color, size,focused }) => (
          focused?
           <View 
            style={{backgroundColor:"#ff93a8"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
              <FontAwesome5 name="heartbeat" size={20} color="white" />
            </View>:
             <View 
            style={{backgroundColor:"#FF6584"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
              <FontAwesome5 name="heartbeat" size={20} color="white" />
            </View>
           
        )
          
           
          
          
        }}
      />
      
      <Tab.Screen
        name="Online"
        component={OnlineTab}
        options={{
          tabBarLabel: 'Online',
            tabBarIcon: ({ color, size,focused }) => (
          focused?
           <View 
            style={{backgroundColor:"#ff93a8"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
              <MaterialCommunityIcons name="chat-outline" size={24} color="white" />
            </View>:
             <View 
            style={{backgroundColor:"#FF6584"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
            <MaterialCommunityIcons name="chat-outline" size={24} color="white" />
            </View>
           
        )
        
        }}
      />
      
      <Tab.Screen
        name="Popular"
        component={PopularTab}
        options={{
          tabBarLabel: 'Popular',
             tabBarIcon: ({ color, size,focused }) => (
          focused?
           <View 
            style={{backgroundColor:"#ff93a8"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
               <FontAwesome5 name="fire-alt" size={20} color="white" />
            </View>:
             <View 
            style={{backgroundColor:"#FF6584"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
             <FontAwesome5 name="fire-alt" size={20} color="white" />
            </View>
           
        )
         
        }}
      />
    
      <Tab.Screen
        name="NewestTab"
        component={NewestMember}
        options={{
          tabBarLabel: 'Newest',
                  tabBarIcon: ({ color, size,focused }) => (
          focused?
           <View 
            style={{backgroundColor:"#ff93a8"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
                 <SimpleLineIcons name="user" size={20} color="white" />
            </View>:
             <View 
            style={{backgroundColor:"#FF6584"}}
            className="flex justify-center items-center w-10 p-2 -mt-3 h-10 rounded-full "
            >
               <SimpleLineIcons name="user" size={20} color="white" />
            </View>
           
        )
       
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
