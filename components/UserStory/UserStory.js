import {StyleSheet, Text, View, Image} from 'react-native'; // Use Image from react-native
import PropTypes from 'prop-types';
import React from 'react';
import {style} from './style';
const UserStory = props => {
  return (
    <View style={style.container}>
      <View style={style.ImageContainer}>
        <Image style={style.image} source={props.profileImage} />
      </View>
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.node.isRequired, // Use 'node' for image sources (works for images and other components)
};

export default UserStory;
