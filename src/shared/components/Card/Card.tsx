import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';
import { TPaletteColors } from '../../types/TPaletteColors';

const { palette } = theme;

interface CardProps {
  title?: string;
  variantColor?: TPaletteColors;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  variantColor = 'light',
}) => {
  const styles = getStyles(variantColor);
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {children}
    </View>
  );
};

const getStyles = (variantColor: TPaletteColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: palette[variantColor],
      padding: 16,
      elevation: 2,
      borderRadius: 6,
    },
    titleContainer: {
      marginBottom: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: palette.dark,
    },
  });

export default Card;
