import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from '../components/Header';
import {Button, Text} from 'react-native-ui-lib';

// import screens
import Redirect from '../pages/Redirect/index';
import Splash from '../pages/Splash/index';
import LoginAndRegister from '../pages/LoginAndRegister/index';
import Question from '../pages/Question/index';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="screen" screenOptions={{}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Redirect"
        component={Redirect}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LoginAndRegister"
        component={LoginAndRegister}
        options={{headerTitle: 'Login & Register', headerTransparent: true}}
      />

      <Stack.Screen
        name="Question"
        component={Question}
        options={{
          headerTitle: 'Question Page',
          headerTitleAlign: 'center',
          headerTintColor: '#662900',
          headerTitleStyle: {
            color: '#662900',
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
