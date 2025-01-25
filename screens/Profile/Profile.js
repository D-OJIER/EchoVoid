import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faGear,
  faTableCells,
  faFeatherPointed,
} from '@fortawesome/free-solid-svg-icons';

const Profile = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    {id: 1, image: require('../../assets/images/343996.jpg')},
    {id: 2, image: require('../../assets/images/knight1.jpeg')},
    {id: 3, image: require('../../assets/images/343996.jpg')},
    {id: 4, image: require('../../assets/images/knight1.jpeg')},
    {id: 5, image: require('../../assets/images/343996.jpg')},
    {id: 6, image: require('../../assets/images/knight1.jpeg')},
    {id: 7, image: require('../../assets/images/343996.jpg')},
    {id: 8, image: require('../../assets/images/knight1.jpeg')},
    {id: 9, image: require('../../assets/images/343996.jpg')},
    {id: 10, image: require('../../assets/images/knight1.jpeg')},
    {id: 11, image: require('../../assets/images/343996.jpg')},
    {id: 12, image: require('../../assets/images/knight1.jpeg')},
  ];

  const blogs = [
    {
      id: 1,
      title: 'Ancient Tech Discoveries',
      excerpt:
        'Today I discovered remarkable artifacts in the depths of EchoVoid...',
      date: '2 days ago',
      likes: 456,
    },
    {
      id: 2,
      title: 'Mysteries of the Void',
      excerpt:
        'The ancient scrolls reveal secrets of forgotten technologies...',
      date: '5 days ago',
      likes: 789,
    },
  ];

  const renderContent = () => {
    if (activeTab === 'posts') {
      return (
        <View style={Style.gridContainer}>
          {posts.map(post => (
            <TouchableOpacity key={post.id} style={Style.gridItem}>
              <Image source={post.image} style={Style.gridImage} />
            </TouchableOpacity>
          ))}
        </View>
      );
    }
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

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#D4AF37" />
        </TouchableOpacity>
        <Text style={Style.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faGear} size={24} color="#D4AF37" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={Style.profileSection}>
          <Image
            source={require('../../assets/images/343996.jpg')}
            style={Style.profileImage}
          />
          <View style={Style.statsContainer}>
            <View style={Style.statItem}>
              <Text style={Style.statNumber}>3,333</Text>
              <Text style={Style.statLabel}>Posts</Text>
            </View>
            <View style={Style.statItem}>
              <Text style={Style.statNumber}>33.3K</Text>
              <Text style={Style.statLabel}>Followers</Text>
            </View>
            <View style={Style.statItem}>
              <Text style={Style.statNumber}>333</Text>
              <Text style={Style.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        <View style={Style.bioSection}>
          <Text style={Style.username}>Voidwalker</Text>
          <Text style={Style.bio}>
            Explorer of the EchoVoid | Seeker of ancient tech | Embracing the
            digital void
          </Text>
        </View>

        <View style={Style.actionButtons}>
          <TouchableOpacity style={Style.editButton}>
            <Text style={Style.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.tabContainer}>
          <TouchableOpacity
            style={[Style.tab, activeTab === 'posts' && Style.activeTab]}
            onPress={() => setActiveTab('posts')}>
            <FontAwesomeIcon
              icon={faTableCells}
              size={24}
              color={activeTab === 'posts' ? '#D4AF37' : '#997788'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[Style.tab, activeTab === 'blogs' && Style.activeTab]}
            onPress={() => setActiveTab('blogs')}>
            <FontAwesomeIcon
              icon={faFeatherPointed}
              size={24}
              color={activeTab === 'blogs' ? '#D4AF37' : '#997788'}
            />
          </TouchableOpacity>
        </View>

        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
