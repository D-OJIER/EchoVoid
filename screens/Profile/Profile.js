import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faGear} from '@fortawesome/free-solid-svg-icons';
import PostsTab from '../../components/ProfileTabsComponents/PostsTab';
import BlogsTab from '../../components/ProfileTabsComponents/BlogsTab';
import {Routes} from '../../navigation/Routes';

const Tab = createMaterialTopTabNavigator();

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#D4AF37" />
        </TouchableOpacity>
        <Text style={Style.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Setting)}>
          <FontAwesomeIcon icon={faGear} size={24} color="#D4AF37" />
        </TouchableOpacity>
      </View>

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

        <View style={Style.bioSection}>
          <Text style={Style.username}>Voidwalker</Text>
          <Text style={Style.bio}>
            Explorer of the EchoVoid | Seeker of ancient tech
          </Text>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#572554'},
          tabBarIndicatorStyle: {backgroundColor: '#D4AF37'},
          tabBarActiveTintColor: '#D4AF37',
          tabBarInactiveTintColor: '#997788',
        }}>
        <Tab.Screen name="Posts" component={PostsTab} />
        <Tab.Screen name="Blogs" component={BlogsTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Profile;
