import React from 'react';
import {Image} from "react-native"
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import Diet from '../screens/Diet';
import Consult from '../screens/Consult';
import Remidies from '../screens/Remidies';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Image source={require("../home.gif")} style={{ width:50, height:50}} />
    }
    },
  Diet : {
    screen : Diet,
    navigationOptions:{
      drawerIcon : <Image source={require("../diet.gif")} style={{ width:50, height:50}} />,
      drawerLabel : "Diet"
    }
  },
  Consult : {
    screen : Consult,
    navigationOptions:{
      drawerIcon : <Image source={require("../consultation.gif")} style={{ width:70, height:70}} />,
      drawerLabel : "Consultation"
    }
  },
  Remidies :{
    screen: Remidies,
    navigationOptions:{
      drawerIcon : <Image source={require("../home_remidies.gif")} style={{ width:70, height:70}} />,
      drawerLabel : "Home Remedies"
    }
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
