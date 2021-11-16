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
import {LogBox} from 'react-native';

ThemeManager.setComponentTheme('Text', {
  regular: true,
  body: true,
});
// old colors
/*
Colors.loadColors({
  primaryColor: '#FFFFFF',
  secondary: '#FF6821',
  error: '#ff2442',
  success: '#00CD8B',
  text: '#FF6821',
  pastelOrange: '#662900',
  pastelOrangeBg: '#F4D19B',
});
*/

Colors.loadColors({
  primary: '#6A5AE0',
  secondary: '#9087E5',
  pink: '#FF6FA2',
  pastelPink: '#FFD6DD',
  pastelBlue: '#C4D0FB',
  pastelGrey: '#E6E6E6',
  error: '#ff2442',
  success: '#00CD8B',
  text: '#FFFFFF',
});

Typography.loadTypographies({
  bold: {fontWeight: 'bold', fontSize: 20},
  rubik: {
    fontFamily: 'Rubik-Regular',
  },
});

LogBox.ignoreLogs([
  'Warning:',
  'If you want to use Reanimated',
  'Stack Navigator:',
  'EventEmitter.removeListener',
]); // ignore warnings && don't forget to remove this line in test

// random element from array
Array.prototype.sample = function () {
  return Math.floor(Math.random() * this.length);
};

Array.prototype.shuffle = function () {
  let m = this.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = this[m];
    this[m] = this[i];
    this[i] = t;
  }
  return this;
};

Array.prototype.remove = function () {
  let index = this.sample();
  if (index > -1) {
    this.splice(index, 1);
  }
};

export default () => (
  <React.Fragment>
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  </React.Fragment>
);
