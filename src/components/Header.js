import React from 'react';
import {
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

export const Header = ({scene, previous, navigation}) => {
  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const BackAction = () => {
    previous ? <TopNavigationAction icon={BackIcon} /> : null;
  };

  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return <TopNavigation accessoryLeft={BackAction} title={title} />;
};
