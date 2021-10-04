import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from '../components/Header';
import Redirect from '../pages/Redirect/index';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Redirect"
        component={Redirect}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
