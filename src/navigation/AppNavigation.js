import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {MainScreen} from '../screens/MainScreen/MainScreen';
import {PostScreen} from '../screens/PostScreen/PostScreen';
import {THEME} from '../theme';
import {BookedScreen} from "../screens/BookedScreen/BookedScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import {AboutScreen} from "../screens/AboutScreen/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen/CreateScreen";

const navigationOptions = (initName) => ({
  initialRouteName: initName,
    defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  }
});

const PostNavigator = createStackNavigator(
    {
      Main: MainScreen,
      Post: PostScreen
    },
    navigationOptions('Main')
)

const BookedNavigator = createStackNavigator(
    {
      Booked: BookedScreen,
      Post: PostScreen
    },
    navigationOptions('Booked'),
);

const AboutNavigator = createStackNavigator(
    {
      About: AboutScreen,
    },
    navigationOptions('About'),
);

const CreateNavigator = createStackNavigator(
    {
      Create: CreateScreen,
    },
    navigationOptions('Create'),
);

const BottomNavigatorConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'All posts',
      tabBarIcon: (info) => (
          <Ionicons name={'ios-albums'} color={info.tintColor} size={25}/>
      )
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Booked posts',
      tabBarIcon: (info) => (
          <Ionicons name={'ios-star'} color={info.tintColor} size={25}/>
      )
    }
  }
};

const BottomNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        BottomNavigatorConfig,
        {
          activeTintColor: '#fff',
          shifting: true,
          barStyle: {
            backgroundColor: THEME.MAIN_COLOR
          }
        }
    )
    : createBottomTabNavigator(
        BottomNavigatorConfig,
        {
          tabBarOptions: {
            activeTintColor: THEME.MAIN_COLOR
          }
        }
    );

const MainNavigator = createDrawerNavigator(
    {
      PostTabs: {
        screen: BottomNavigator,
        navigationOptions: {
          drawerLabel: 'Home',
        }
      },
      About: {
        screen: AboutNavigator,
        navigationOptions: {
          drawerLabel: 'About us',
        }
      },
      Create: {
        screen: CreateNavigator,
        navigationOptions: {
          drawerLabel: 'Create post',
        }
      }
    },
    {
      contentOptions: {
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {
          fontFamily: 'openSans-bold',
        }
      }
    }
);

export const AppNavigation = createAppContainer(MainNavigator);
