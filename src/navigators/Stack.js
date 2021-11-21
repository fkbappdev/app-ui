import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from '../components/Header';
import {Button, Text} from 'react-native-ui-lib';

// import screens
import Redirect from '../pages/Redirect/index';
import Splash from '../pages/Splash/index';
import Login from '../pages/Login/index';
import Register from '../pages/Register/index';

import Question from '../pages/Question/index';
import Options from '../pages/Options/index';
import Quizzes from '../pages/Quizzes/index';
import ThisOrThat from '../pages/ThisOrThat/index';
import PlayerNames from '../pages/PlayerNames/index';
import QuestionNumbers from '../pages/QuestionNumbers/index';
import QuestionCategorys from '../pages/QuestionCategorys/index';
import Custom from '../pages/Custom/index';
import CustomType from '../pages/CustomType/index';
import CustomAddQuestion from '../pages/CustomAddQuestion/index';

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
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Rubik-Bold',
            fontWeight: 'bold',
          },
          headerTintColor: '#6A5AE0',
          headerTitleStyle: {
            color: '#6A5AE0',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: 'Register',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Rubik-Bold',
            fontWeight: 'bold',
          },
          headerTintColor: '#6A5AE0',
          headerTitleStyle: {
            color: '#6A5AE0',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="Question"
        component={Question}
        options={{
          headerTitle: 'Question Page',
          headerTitleAlign: 'center',
          headerTintColor: '#6A5AE0',
          headerTitleStyle: {
            color: '#6A5AE0',
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Options"
        component={Options}
        options={{
          headerTitle: 'Select an Game',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="Quizzes"
        component={Quizzes}
        options={{
          headerTitle: 'Quiz Game',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="ThisOrThat"
        component={ThisOrThat}
        options={{
          headerTitle: 'This or That?',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="PlayerNames"
        component={PlayerNames}
        options={{
          headerTitle: 'Player Names',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="QuestionNumbers"
        component={QuestionNumbers}
        options={{
          headerTitle: 'Select Question Number',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="QuestionCategorys"
        component={QuestionCategorys}
        options={{
          headerTitle: 'Select Question Categorys',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="Custom"
        component={Custom}
        options={{
          headerTitle: 'Custom Game',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="CustomType"
        component={CustomType}
        options={{
          headerTitle: 'Select game mode',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />

      <Stack.Screen
        name="CustomAddQuestion"
        component={CustomAddQuestion}
        options={{
          headerTitle: 'Add question',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'Rubik-Regular',
            fontWeight: '500',
          },
          headerTransparent: true,
          headerMode: 'float',
        }}
      />
    </Stack.Navigator>
  );
}
