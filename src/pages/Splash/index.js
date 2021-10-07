import React, {useEffect} from 'react';
import {View, Text} from 'react-native-ui-lib';
import styles from './styles';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Redirect');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>LOGO</Text>
    </View>
  );
}
