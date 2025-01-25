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
  profileSection: {
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#D4AF37',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#997788',
    fontSize: 14,
  },
  bioSection: {
    padding: 16,
  },
  username: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bio: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
  },
  actionButtons: {
    padding: 16,
  },
  editButton: {
    backgroundColor: '#7A3D77',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Tab Navigation
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#7A3D77',
    marginTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
  },

  // Grid Layout
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  gridImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7A3D77',
  },

  // Blog Preview
  blogPreview: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#7A3D77',
  },
  blogTitle: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  blogExcerpt: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
  },
  blogMeta: {
    flexDirection: 'row',
    marginTop: 8,
  },
  blogMetaText: {
    color: '#997788',
    fontSize: 12,
    marginRight: 16,
  },
});
