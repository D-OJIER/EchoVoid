import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Style} from './style';

const posts = [
  {id: 1, image: require('../../assets/images/343996.jpg')},
  {id: 2, image: require('../../assets/images/knight1.jpeg')},
  // ...existing posts
];

const PostsTab = () => {
  return (
    <View style={Style.gridContainer}>
      {posts.map(post => (
        <TouchableOpacity key={post.id} style={Style.gridItem}>
          <Image source={post.image} style={Style.gridImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PostsTab;
