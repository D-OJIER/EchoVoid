import {Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {style} from './style';

const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
