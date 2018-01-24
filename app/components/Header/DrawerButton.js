import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const DrawerButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.drawerButtonContainer}
    >
      <Icon
        name='md-menu'
        size={22}
      />
    </TouchableOpacity>
  )
};