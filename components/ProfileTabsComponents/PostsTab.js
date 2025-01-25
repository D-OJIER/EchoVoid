import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Style} from './style';
import {ScrollView} from 'react-native-gesture-handler';

const posts = [
  {id: 1, image: require('../../assets/images/343996.jpg')},
  {id: 2, image: require('../../assets/images/knight1.jpeg')},
  {id: 3, image: require('../../assets/images/343996.jpg')},
  {id: 4, image: require('../../assets/images/knight1.jpeg')},
  {id: 5, image: require('../../assets/images/343996.jpg')},
  {id: 6, image: require('../../assets/images/knight1.jpeg')},
  {id: 7, image: require('../../assets/images/343996.jpg')},
  {id: 8, image: require('../../assets/images/knight1.jpeg')},
  {id: 9, image: require('../../assets/images/knight1.jpeg')},
  {id: 10, image: require('../../assets/images/343996.jpg')},
  {id: 11, image: require('../../assets/images/knight1.jpeg')},
  {id: 12, image: require('../../assets/images/knight1.jpeg')},

  // ...existing posts
];

const PostsTab = () => {
  return (
    <ScrollView>
      <View style={Style.gridContainer}>
        {posts.map(post => (
          <TouchableOpacity key={post.id} style={Style.gridItem}>
            <Image source={post.image} style={Style.gridImage} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default PostsTab;
