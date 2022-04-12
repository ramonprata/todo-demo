import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export interface AvatarProps {
  imagePath: string;
}

const Avatar: React.FC<AvatarProps> = ({ imagePath }) => {
  return <Image source={{ uri: imagePath }} style={styles.imageContent} />;
};

const styles = StyleSheet.create({
  imageContent: {
    height: hp('8%'),
    width: hp('8%'),
    borderRadius: hp('5%'),
  },
});

export default Avatar;
