import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import InventoryScreen from '../screens/InventoryScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SellScren from '../screens/SellScreen';
import { TouchableRipple } from 'react-native-paper';
const Tab = createBottomTabNavigator();

const screens = [
  { name: 'Home', component: HomeScreen, iconName: 'home' },
  { name: 'Inventory', component: InventoryScreen, iconName: 'archive' },
  { name: 'Sell', component: SellScren, iconName: 'shopping-cart' },
  { name: 'Reservation', component: OrdersScreen, iconName: 'calendar' },
  { name: 'Profile', component: ProfileScreen, iconName: 'user' },

];

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (

              <Icon name={screen.iconName} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
