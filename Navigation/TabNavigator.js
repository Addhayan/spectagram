import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
      return(
        <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;
                  if(route.name === 'Feed'){
                    iconName = 'focused'
                          ? 'book'
                          : 'book-outline';
                  } else if(route.name === 'CreatePost'){
                    iconName = 'focused' ? 'create' : 'create-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions = {{
                activeTintColor : 'tomato',
                unactiveTintColor : 'gray',
              }}
              >
                <Tab.Screen name="Feed" component={feed} />
                <Tab.Screen name="CreatePost" component={CreatePost} />
              </Tab.Navigator>
      );
}

export default BottomTabNavigator
