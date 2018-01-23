import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { capitalizeFirstLetter } from '../helpers/string';

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Contact: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor}) => <Icon name='ios-list' size={35} color={tintColor}/>
    },
  },
  NewContact: {
    screen: NewContact,
    navigationOptions: {
    tabBarLabel: 'New Contact',
      tabBarIcon: ({ tintColor}) => <Icon name='ios-add' size={35} color={tintColor}/>
    },
  },
  Me: {
    screen: Me,
    tabBarLabel: 'Me',
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => <Icon name='ios-contact' size={35} color={tintColor}/>
    },
  }
});