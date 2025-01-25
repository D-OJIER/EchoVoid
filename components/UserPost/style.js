import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Use} from 'react-native-svg';

const style = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  userInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Jersey15-Regular',
    color: '#d4af38',
  },
  userLocation: {
    fontSize: 15,
    fontFamily: 'Jersey15-Regular',
    color: '#5a8118',
  },
  postImageContainer: {
    padding: 13,
    justifyContent: 'center',
    alignContent: 'center',
  },
  postImage: {
    width: 'auto',
    height: 350,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  postInfo: {
    flexDirection: 'row',
    padding: 1,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  postDetails: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default style;
