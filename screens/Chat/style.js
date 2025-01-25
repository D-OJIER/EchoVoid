import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#572554',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#7A3D77',
  },
  headerTitle: {
    color: '#D4AF37',
    fontSize: 20,
    fontFamily: 'Jersey15-Regular',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#7A3D77',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  username: {
    color: '#D4AF37',
    fontSize: 16,
    fontFamily: 'Jersey15-Regular',
  },
  timestamp: {
    color: '#997788',
    fontSize: 12,
  },
  messagePreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    color: '#997788',
    fontSize: 14,
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#D4AF37',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  unreadCount: {
    color: '#572554',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#572554',
  },
  messageBubbleSent: {
    backgroundColor: '#D4AF37',
    padding: 12,
    borderRadius: 16,
    borderBottomRightRadius: 4,
    marginLeft: 60,
    marginBottom: 8,
  },
  messageBubbleReceived: {
    backgroundColor: '#7A3D77',
    padding: 12,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    marginRight: 60,
    marginBottom: 8,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Jersey15-Regular',
  },
  messageTimestamp: {
    color: '#997788',
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#7A3D77',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#572554',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#D4AF37',
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#D4AF37',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7A3D77',
    margin: 16,
    padding: 10,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#D4AF37',
    fontSize: 16,
    fontFamily: 'Jersey15-Regular',
  },
});
