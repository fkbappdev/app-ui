import React, {useEffect} from 'react';
import {Card, Colors, Button} from 'react-native-ui-lib';
import {View, Text} from 'react-native';
import styles from './styles';

// pages
import LoginPage from './Login';
import RegisterPage from './Register';

export default function LoginAndRegister() {
  const [Page, SetPage] = React.useState(0); 
    return (
        <View style={styles.container}>
            <Card
                style={styles.card}
                width="100%"
                height={240}
                activeOpacity={1}
                >
                  { Page === 0 ? <LoginPage setPage={SetPage}/> : <RegisterPage setPage={SetPage}/> }
            </Card>
        </View>
    );
}
