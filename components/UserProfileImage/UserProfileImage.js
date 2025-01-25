import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {style} from './style';
const UserProfileImage = props => {
  return (
    <View style={style.ImageContainer}>
      <Image style={style.image} source={props.profileImage} />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.node.isRequired,
};

export default UserProfileImage;
