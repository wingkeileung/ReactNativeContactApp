import React from 'react';
import Moment from 'moment';
import { View } from 'react-native';

import styles from './styles';
import Row from './Row';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ login, dob, location, registered}) => {
  return (
    <View style={styles.infoContainer}>
      <Row
        label="city"
        body={capitalizeFirstLetter(location.city)}
      />
      <Row
        label="birthday"
        body={Moment(dob).format('MMMM Do, YYYY')}
      />
      <Row
        label="registered"
        body={Moment(registered).format('MMMM Do, YYYY')}
      />  
      <Row
        label="username"
        body={login.username}
      />
    </View>
  )
};

export default Info;