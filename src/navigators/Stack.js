import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from '../components/Header';

// import screens
import Redirect from '../pages/Redirect/index';
import Splash from '../pages/Splash/index';
import LoginAndRegister from '../pages/LoginAndRegister/index';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({options, route, navigation}) => (
          <Header options={options} route={route} navigation={navigation} />
        ),
      }}>
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
        options={{headerTitle: 'Login & Register'}}
      />
    </Stack.Navigator>
  );
}
