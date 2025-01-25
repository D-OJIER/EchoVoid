import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Switch} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faUser,
  faLock,
  faPalette,
  faBell,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './style';

const SettingItem = ({
  icon,
  title,
  hasSwitch,
  value,
  onValueChange,
  onPress,
}) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <View style={styles.settingLeft}>
      <FontAwesomeIcon icon={icon} size={20} color="#D4AF37" />
      <Text style={styles.settingText}>{title}</Text>
    </View>
    {hasSwitch ? (
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{false: '#997788', true: '#7A3D77'}}
        thumbColor={value ? '#D4AF37' : '#f4f3f4'}
      />
    ) : (
      <FontAwesomeIcon icon={faChevronLeft} size={16} color="#997788" />
    )}
  </TouchableOpacity>
);

const Setting = ({navigation}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#D4AF37" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{width: 24}} />
      </View>

      <View style={styles.settingsContainer}>
        <SettingItem
          icon={faUser}
          title="Account Settings"
          onPress={() => {}}
        />
        <SettingItem
          icon={faLock}
          title="Privacy & Security"
          onPress={() => {}}
        />
        <SettingItem
          icon={faPalette}
          title="Dark Mode"
          hasSwitch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
        <SettingItem
          icon={faBell}
          title="Notifications"
          hasSwitch
          value={notifications}
          onValueChange={setNotifications}
        />
        <SettingItem
          icon={faQuestionCircle}
          title="Help & Support"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;
