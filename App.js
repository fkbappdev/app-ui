import React from 'react';
import {StyleSheet} from 'react-native';
/*import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';*/
import StackNavigator from './src/navigators/Stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors, Typography, Spacings, ThemeManager} from 'react-native-ui-lib';

ThemeManager.setComponentTheme('Text', {
  regular: true,
  body: true,
});

Colors.loadColors({
  primaryColor: '#FFFFFF',
  secondary: '#FF6821',
  error: '#ff2442',
  success: '#00CD8B',
  text: '#FF6821',
});

Typography.loadTypographies({
  bold: {fontWeight: 'bold', fontSize: 20},
  bubblegumSans: {
    fontFamily: 'BubblegumSans-Regular',
  },
});

export default () => (
  <React.Fragment>
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  </React.Fragment>
);
