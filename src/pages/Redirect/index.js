import React from 'react';
import {Layout, Button, Text} from '@ui-kitten/components';
import styles from './styles';

export default function Redirect({navigation}) {
  const PlayOnlineAction = () => {
    navigation.navigate('LoginAndRegister');
  };

  return (
    <Layout style={styles.container}>
      {/* TOP */}
      <Layout style={styles.top}>
        <Text style={styles.logo}>LOGO</Text>
      </Layout>
      {/* BOTTOM */}
      <Layout style={styles.bottom}>
        <Button style={styles.button} appearance="outline">
          <Text style={styles.buttonText}>Play Single</Text>
        </Button>
        <Button
          onPress={() => PlayOnlineAction()}
          style={styles.button}
          appearance="outline">
          <Text style={styles.buttonText}>Play Online</Text>
        </Button>
      </Layout>
    </Layout>
  );
}
