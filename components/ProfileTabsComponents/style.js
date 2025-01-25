import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const itemWidth = width / 3;

export const Style = StyleSheet.create({
  // Grid Layout for Posts
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#572554',
  },
  gridItem: {
    width: itemWidth,
    height: itemWidth,
    padding: 1,
  },
  gridImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7A3D77',
  },

  // Blog Preview Cards
  blogPreview: {
    padding: 16,
    backgroundColor: '#7A3D77',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  blogTitle: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Jersey15-Regular',
  },
  blogExcerpt: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  blogMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blogMetaText: {
    color: '#997788',
    fontSize: 12,
  },
});
