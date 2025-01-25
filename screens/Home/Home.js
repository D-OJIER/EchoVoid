import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/Title/Title';
import {Style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faScroll} from '@fortawesome/free-solid-svg-icons';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Voidwalker',
      id: 1,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Voidwalker navigated through the labyrinth of EchoVoid, overcoming ancient challenges to unlock the secrets of the forgotten world.',
    },
    {
      firstName: 'Lumen Void',
      id: 2,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Lumen Void discovered a hidden portal within EchoVoid that led them to realms where the past and future converged.',
    },
    {
      firstName: 'Eclipse',
      id: 3,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Eclipse, with their keen knowledge of forgotten technologies, uncovered a powerful artifact in EchoVoid that could change the course of history.',
    },
    {
      firstName: 'Nebula',
      id: 4,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Nebula forged an alliance with ancient entities within EchoVoid, unlocking new abilities to wield the forgotten power.',
    },
    {
      firstName: 'Astrid Void',
      id: 5,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Astrid Void ventured into the heart of EchoVoid, uncovering the ruins of an ancient civilization and bringing back knowledge long lost.',
    },
    {
      firstName: 'Seraph Void',
      id: 6,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Seraph Void’s journey through EchoVoid revealed the true power of the forgotten relics, and they became a key figure in the tech rebirth.',
    },
    {
      firstName: 'Obsidian',
      id: 7,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Obsidian deciphered the ancient code within EchoVoid, gaining control of the digital realm that once belonged to a lost empire.',
    },
    {
      firstName: 'Vespera',
      id: 8,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Vespera found herself trapped in a parallel dimension within EchoVoid, but her willpower and knowledge helped her escape with groundbreaking secrets.',
    },
    {
      firstName: 'Noctis Void',
      id: 9,
      profileImage: require('../../assets/images/343996.jpg'),
      story:
        'Noctis Void encountered the Guardians of EchoVoid, and through their resilience, earned their trust to unlock the ultimate tech relic hidden within.',
    },
  ];

  const userPosts = [
    {
      id: 1,
      firstName: 'Voidwalker',
      lastName: 'Void',
      location: 'EchoVoid',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/knight1.jpeg'),
      likes: 3333,
      comments: 333,
      shares: 33,
      bookmarks: 3,
    },
    {
      id: 2,
      firstName: 'Lumen',
      lastName: 'Void',
      location: 'EchoRealm',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 2800,
      comments: 280,
      shares: 28,
      bookmarks: 5,
    },
    {
      id: 3,
      firstName: 'Eclipse',
      lastName: 'Noctis',
      location: 'Shadow Nexus',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 4500,
      comments: 500,
      shares: 50,
      bookmarks: 7,
    },
    {
      id: 4,
      firstName: 'Nebula',
      lastName: 'Vortex',
      location: 'Galactic Rift',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 3100,
      comments: 310,
      shares: 31,
      bookmarks: 4,
    },
    {
      id: 5,
      firstName: 'Astrid',
      lastName: 'Void',
      location: 'Celestial Divide',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 3900,
      comments: 390,
      shares: 39,
      bookmarks: 6,
    },
    {
      id: 6,
      firstName: 'Seraph',
      lastName: 'Eon',
      location: 'Light’s Edge',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 5200,
      comments: 600,
      shares: 60,
      bookmarks: 9,
    },
    {
      id: 7,
      firstName: 'Obsidian',
      lastName: 'Shade',
      location: 'Dark Abyss',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 4700,
      comments: 470,
      shares: 47,
      bookmarks: 8,
    },
    {
      id: 8,
      firstName: 'Vespera',
      lastName: 'Nyx',
      location: 'Midnight Hollow',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 3500,
      comments: 350,
      shares: 35,
      bookmarks: 5,
    },
    {
      id: 9,
      firstName: 'Noctis',
      lastName: 'Umbra',
      location: 'Eclipse Tower',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 5100,
      comments: 510,
      shares: 51,
      bookmarks: 10,
    },
    {
      id: 10,
      firstName: 'Zephyr',
      lastName: 'Drift',
      location: 'Windward Spire',
      profileImage: require('../../assets/images/343996.jpg'),
      image: require('../../assets/images/343996.jpg'),
      likes: 2900,
      comments: 290,
      shares: 29,
      bookmarks: 4,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return startIndex >= database.length
      ? []
      : database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialPosts);
    setIsLoadingUserPosts(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreUserStories = () => {
    if (isLoadingUserStories) return;
    setIsLoadingUserStories(true);
    setUserStoriesCurrentPage(prev => {
      const newPage = prev + 1;
      const contentToAppend = pagination(
        userStories,
        newPage,
        userStoriesPageSize,
      );
      if (contentToAppend.length > 0) {
        setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
      }
      setIsLoadingUserStories(false);
      return newPage;
    });
  };

  const loadMoreUserPosts = () => {
    if (isLoadingUserPosts) return;
    setIsLoadingUserPosts(true);
    setUserPostsCurrentPage(prev => {
      const newPage = prev + 1;
      const contentToAppend = pagination(userPosts, newPage, userPostsPageSize);
      if (contentToAppend.length > 0) {
        setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
      }
      setIsLoadingUserPosts(false);
      return newPage;
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: '#572554'}}>
      <StatusBar backgroundColor={'#572554'} />
      <View style={Style.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={Style.header}>
                <Title title="EchoVoid" />
                <TouchableOpacity
                  style={Style.messageIcon}
                  onPress={() => {
                    navigation.navigate(Routes.Chat);
                  }}>
                  <FontAwesomeIcon icon={faScroll} size={25} color="#006400" />
                  <View style={Style.messageNumberContainer}>
                    <Text style={Style.messageNumber}>0</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Style.userStoryContainer}>
                <FlatList
                  data={userStoriesRenderedData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => `UserStory${item.id}`}
                  renderItem={({item}) => (
                    <UserStory
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                  onEndReachedThreshold={0.5}
                  onEndReached={loadMoreUserStories}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreUserPosts}
          data={userPostsRenderedData}
          keyExtractor={item => `UserPost${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={Style.userPostsContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                profileImage={item.profileImage}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                shares={item.shares}
                bookmarks={item.bookmarks}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
