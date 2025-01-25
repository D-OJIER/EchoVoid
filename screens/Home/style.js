import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  header: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 10,
    backgroundColor: '#D4AF37',
    borderRadius: 30,
  },
  messageNumberContainer: {
    backgroundColor: '#7A3D77',
    borderRadius: 100,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 7,
    top: 7,
  },
  messageNumber: {
    color: '#D4AF37',
    fontSize: 11,
    fontFamily: 'Jersey15-Regular',
  },
  userStoryContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },

  userPostsContainer: {
    marginLeft: 27,
    marginRight: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
});
export {Style};
