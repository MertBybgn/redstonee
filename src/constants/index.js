import * as Icon from '../components/icons'
import React from 'react'

/*
export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}
*/

export const MENU = [

  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notifications',
    path: '/notifications',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: 'Notifications',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: 'Messages',
    notify: 0
  },

  
  {
    key: 'profile',
    path: '/profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  
]