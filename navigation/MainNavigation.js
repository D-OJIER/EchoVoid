import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './Routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Chat from '../screens/Chat/Chat';
import PostsTab from '../components/ProfileTabsComponents/PostsTab';
import BlogsTab from '../components/ProfileTabsComponents/BlogsTab';
import Setting from '../screens/Setting/Setting';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name={'Posts'} component={PostsTab} />
      <ProfileTabs.Screen name={'Blogs'} component={BlogsTab} />
    </ProfileTabs.Navigator>
  );
};

const CustomDrawerContent = props => (
  <DrawerContentScrollView {...props} style={styles.drawerContainer}>
    <View style={styles.profileSection}>
      <Image
        source={require('../assets/images/343996.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Voidwalker</Text>
      <Text style={styles.profileBio}>Explorer of the EchoVoid</Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#572554',
          width: 280,
        },
        drawerLabelStyle: {
          color: '#D4AF37',
          fontSize: 16,
          fontFamily: 'Jersey15-Regular',
        },
        drawerActiveBackgroundColor: '#7A3D77',
        drawerInactiveTintColor: '#D4AF37',
        drawerActiveTintColor: '#D4AF37',
      }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
      <Drawer.Screen name={Routes.Setting} component={Setting} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
        initialRouteName: Routes.Home,
      }}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
      <Stack.Screen name={Routes.Chat} component={Chat} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#572554',
  },
  profileSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7A3D77',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#D4AF37',
  },
  profileName: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileBio: {
    color: '#997788',
    fontSize: 14,
  },
});

export default MainNavigation;
