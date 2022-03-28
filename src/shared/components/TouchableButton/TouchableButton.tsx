import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { theme } from '../../theme';

interface TouchableButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'l' | 'm' | 's';
}

const TouchableButton: React.FC<TouchableButtonProps> = ({
  title,
  onPress,
  variant = 'l',
}) => {
  const styles = getStyles(variant);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (variant: TouchableButtonProps['variant'] = 'l') => {
  const variantStyles = {
    l: {
      width: '100%',
      paddingVertical: 16,
    },
    m: {
      width: '80%',
      paddingVertical: 12,
    },
    s: {
      width: '50%',
      paddingVertical: 8,
    },
  };

  return StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
    },
    button: {
      backgroundColor: theme.palette.primary,
      paddingVertical: variantStyles[variant].paddingVertical,
      alignItems: 'center',
      width: variantStyles[variant].width,
    },
    title: {
      color: theme.palette.white,
    },
  });
};

export default TouchableButton;
