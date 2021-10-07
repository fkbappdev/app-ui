import React from 'react';
import {
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

// kendi header componentimiz

export const Header = ({options, route, navigation}) => {
  // geri gel ikonu
  const BackIcon = props => <Icon {...props} name="arrow-back" />;
  
  const BackAction = () => {
    return (
      <TopNavigationAction
        onPress={() => navigation.goBack()}
        icon={BackIcon}
      />
    );
  };

  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return <TopNavigation accessoryLeft={BackAction} title={title} />;
};
