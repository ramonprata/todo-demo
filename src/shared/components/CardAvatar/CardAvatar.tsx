import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { theme } from '../../theme';
import Avatar, { AvatarProps } from '../Avatar/Avatar';

interface CardAvatarProps extends AvatarProps {
  mainText: string;
  secText?: string;
}

const CardAvatar: React.FC<CardAvatarProps> = ({
  imagePath,
  mainText,
  secText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatarCotent}>
          <Avatar imagePath={imagePath} />
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.secText}>{secText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  content: {
    borderWidth: 1,
    backgroundColor: theme.palette.dark100,
    borderRadius: wp('4%'),
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  avatarCotent: {
    position: 'relative',
    top: -10,
    left: -10,
  },

  infoContent: {
    flex: 1,
    padding: 12,
  },

  text: {
    color: theme.palette.white,
  },

  get mainText() {
    return {
      ...this.text,
      fontWeight: 'bold',
      fontSize: 18,
    };
  },
  get secText() {
    return {
      ...this.text,
      fontSize: 14,
    };
  },
});

export default CardAvatar;
