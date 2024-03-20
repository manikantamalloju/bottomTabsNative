import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import Favourites from './screens/Favourites';
import Products from './screens/Products';
import {Text} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen
          options={{tabBarLabel: 'Home', tabBarIcon: () => <Text>Home</Text>}}
          name="Products"
          component={Products}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Cart'}}
          name="Cart"
          component={Cart}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Profile'}}
          name="Profile"
          component={Profile}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Favourites',
          }}
          name="Favourites"
          component={Favourites}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
