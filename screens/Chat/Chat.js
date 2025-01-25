import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faSearch} from '@fortawesome/free-solid-svg-icons';

const chats = [
  {
    id: '1',
    username: 'Voidwalker',
    lastMessage: 'The ancient texts speak of a hidden portal...',
    timestamp: '2m ago',
    avatar: require('../../assets/images/343996.jpg'),
    unread: 3,
  },
  {
    id: '2',
    username: 'Lumen Void',
    lastMessage: 'I discovered something in the ruins.',
    timestamp: '15m ago',
    avatar: require('../../assets/images/343996.jpg'),
    unread: 1,
  },
  // Add more chat items as needed
];

const ChatItem = ({item}) => (
  <TouchableOpacity style={Style.chatItem}>
    <Image source={item.avatar} style={Style.avatar} />
    <View style={Style.chatContent}>
      <View style={Style.chatHeader}>
        <Text style={Style.username}>{item.username}</Text>
        <Text style={Style.timestamp}>{item.timestamp}</Text>
      </View>
      <View style={Style.messagePreview}>
        <Text style={Style.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
        {item.unread > 0 && (
          <View style={Style.unreadBadge}>
            <Text style={Style.unreadCount}>{item.unread}</Text>
          </View>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

const Chat = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(
    chat =>
      chat.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#D4AF37" />
        </TouchableOpacity>
        <Text style={Style.headerTitle}>Messages</Text>
        <View style={{width: 24}} />
      </View>

      <View style={Style.searchContainer}>
        <FontAwesomeIcon icon={faSearch} size={20} color="#997788" />
        <TextInput
          style={Style.searchInput}
          placeholder="Search messages..."
          placeholderTextColor="#997788"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredChats}
        renderItem={({item}) => <ChatItem item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Chat;
