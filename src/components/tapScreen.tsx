import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const TabScreen = ({ name, component, iconName }) => (
  <Tab.Screen
    name={name}
    component={component}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name={iconName} color={color} size={size} />
      ),
    }}
  />
);

export default TabScreen;
