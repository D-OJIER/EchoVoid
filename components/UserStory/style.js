import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginRight: 20,
  },
  ImageContainer: {
    borderColor: '#D4AF37',
    padding: 3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Jersey15-Regular',
    fontSize: 17,
    color: '#D4AF37',
    textAlign: 'center',
    marginTop: 10,
  },
});

export {style};
