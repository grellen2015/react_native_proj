import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ContactScreen from './Contacts';
import HomeScreen from './HomePage';
import MessageScreen from './Message';
import MineScreen from './Mine';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Navigation({colorScheme}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'index') {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === 'contact') {
            return <AntDesign name="cloudo" size={size} color={color} />;
          } else if (route.name === 'message') {
            return <AntDesign name="mail" size={size} color={color} />;
          } else if (route.name === 'mine') {
            return <AntDesign name="setting" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen
        name="index"
        component={HomeScreen}
        options={{title: '首页', headerMode: 'none'}}
      />
      <Tab.Screen
        name="contact"
        component={ContactNavigator}
        options={{title: 'Contact'}}
      />
      <Tab.Screen
        name="message"
        component={MessageNavigator}
        options={{title: '消息'}}
      />

      <Tab.Screen
        name="mine"
        component={MineNavigator}
        options={{title: '设置'}}
      />
    </Tab.Navigator>
  );
}
const Tab = createBottomTabNavigator();
const TabStack = createStackNavigator();

function ContactNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="contact"
        component={ContactScreen}
        options={{
          headerTitle: '校园',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}

function MessageNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="message"
        component={MessageScreen}
        options={{
          headerTitle: '消息',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}

function MineNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="mine"
        component={MineScreen}
        options={{
          headerTitle: '我是设置标题',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}
