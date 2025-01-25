import React from 'react';
import {FlatList, TouchableOpacity, Text, View} from 'react-native';
import {Style} from './style';

const blogs = [
  {
    id: 1,
    title: 'Ancient Tech Discoveries',
    excerpt:
      'Today I discovered remarkable artifacts in the depths of EchoVoid...',
    date: '2 days ago',
    likes: 456,
  },
  // ...existing blogs
];

const BlogsTab = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={Style.blogPreview}>
      <Text style={Style.blogTitle}>{item.title}</Text>
      <Text style={Style.blogExcerpt}>{item.excerpt}</Text>
      <View style={Style.blogMeta}>
        <Text style={Style.blogMetaText}>{item.date}</Text>
        <Text style={Style.blogMetaText}>{item.likes} likes</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={blogs}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={Style.blogsContainer}
    />
  );
};

export default BlogsTab;
