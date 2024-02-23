import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { FontAwesome, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';  // Import icons from Expo
import { profileImage } from '~/constants';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Left: Circular Image */}
      <View style={styles.leftContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: profileImage }} 
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Center: App Name */}
      <View style={styles.centerContainer}>
        <Text style={styles.appName} className="italic">PairUp</Text>
      </View>

      {/* Right: Filter and Global World Icons */}
      <View style={styles.rightContainer}>
        <Ionicons name="color-filter-outline" size={24} color="white" />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#FF6584',
    height: 60,
  },
  leftContainer: {
    flex: 1,
  },
  profileImageContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,  // Make it a circle
    borderWidth: 2,  // Border width
    borderColor: 'white',  // Border color
    overflow: 'hidden',  // Clip the border
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 16,
  },
});
