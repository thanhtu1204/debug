import React, {Component} from 'react';
import {Image} from 'react-native';
import {createAppContainer,} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tab1Stack = createStackNavigator(
    {
        Home: {
            screen: Tab1,
            navigationOptions: {
                header: null,
            }
        },


    }
);
const Tab2Stack = createStackNavigator(
    {
        Home: {
            screen: Tab2,
            navigationOptions: {
                header: null,
            }
        },


    }
);



const Menu = createBottomTabNavigator(
    {

        Jobs: {
            screen: Tab1Stack,


        },
        Job: {
            screen: Tab2Stack,


        },
    },
    {
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            if (routeName === 'Jobs') {
                return (
                    <Image

                        source={
                            focused
                                ? require('../asset/image/blog_click.png')
                                : require('../asset/image/blog.png')
                        }
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                );
            }else if(routeName === 'Job'){
                return (
                    <Image

                        source={
                            focused
                                ? require('../asset/image/home_click.png')
                                : require('../asset/image/home.png')
                        }
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                );
            }
        }}),
    }
);
const Main = createStackNavigator(
    {
        Menu: {
            screen: Menu, navigationOptions: {
                header: null,
            }
        },

    },
    {initialRouteName: "Menu", headerLayoutPreset: 'center'}
);

export default createAppContainer(Main)
