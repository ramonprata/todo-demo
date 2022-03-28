import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';
import { TPaletteColors } from '../../types/TPaletteColors';

const { palette } = theme;

interface CardProps {
  title?: string;
  variantColor?: TPaletteColors;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  variantColor = 'light',
  noPadding = false,
}) => {
  const styles = getStyles(variantColor, noPadding);
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

const getStyles = (variantColor: TPaletteColors, noPadding: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: palette[variantColor],
      padding: noPadding ? 0 : 16,
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
