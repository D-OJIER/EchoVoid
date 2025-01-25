import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './Routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Chat from '../screens/Chat/Chat';
import PostsTab from '../components/ProfileTabsComponents/PostsTab';
import BlogsTab from '../components/ProfileTabsComponents/BlogsTab';

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
const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
        initialRouteName: Routes.Home,
      }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
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

export default MainNavigation;
