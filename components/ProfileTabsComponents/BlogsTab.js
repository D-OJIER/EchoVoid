import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
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
  return (
    <View>
      {blogs.map(blog => (
        <TouchableOpacity key={blog.id} style={Style.blogPreview}>
          <Text style={Style.blogTitle}>{blog.title}</Text>
          <Text style={Style.blogExcerpt}>{blog.excerpt}</Text>
          <View style={Style.blogMeta}>
            <Text style={Style.blogMetaText}>{blog.date}</Text>
            <Text style={Style.blogMetaText}>{blog.likes} likes</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BlogsTab;
