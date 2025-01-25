import {LayoutAnimation, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookAtlas,
  faBookBookmark,
  faBookSkull,
  faComment,
  faEllipsisH,
  faHeart,
  faSeedling,
  faShare,
  faShareAlt,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';

const UserPost = props => {
  return (
    <View>
      <View flexDirection="row" style={style.userInfo}>
        <View flexDirection="row" style={style.userContainer}>
          <UserProfileImage profileImage={props.profileImage} />
          <View style={style.userInfoContainer}>
            <Text
              style={
                style.userName
              }>{`${props.firstName} ${props.lastName}`}</Text>
            <Text style={style.userLocation}>{props.location}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={25} color="#006400" />
      </View>
      <View style={style.postImageContainer}>
        <Image style={style.postImage} source={props.image} />
      </View>
      <View style={style.postInfo}>
        <View style={style.postDetails}>
          <FontAwesomeIcon icon={faHeart} />
          <Text> {props.likes}</Text>
        </View>
        <View style={style.postDetails}>
          <FontAwesomeIcon icon={faComment} />
          <Text> {props.comments}</Text>
        </View>
        <View style={style.postDetails}>
          <FontAwesomeIcon icon={faShareAlt} />
          <Text> {props.shares} </Text>
        </View>
        <View style={style.postDetails}>
          <FontAwesomeIcon icon={faBookBookmark} />
          <Text> {props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserPost;
