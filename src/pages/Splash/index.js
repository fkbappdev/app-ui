import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import styles from './styles';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Redirect');
    }, 2000);
  }, []);

  return (
    <Layout style={styles.container}>
      <Text>LOGO</Text>
    </Layout>
  );
}
