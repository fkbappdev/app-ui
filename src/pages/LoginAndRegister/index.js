import React, {useEffect} from 'react';
import {TabBar, Tab, Layout, Text} from '@ui-kitten/components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LoginPage from './Login';
import RegisterPage from './Register';
import styles from './styles';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabBar = ({navigation, state}) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title="LOGIN" />
    <Tab title="REGISTER" />
  </TabBar>
);

export default function LoginAndRegister() {
  return (
    <Navigator tabBar={props => <TopTabBar {...props} />}>
      <Screen name="Login" component={LoginPage} />
      <Screen name="Register" component={RegisterPage} />
    </Navigator>
  );
}
