import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { theme } from '../../theme';
import DefaultIcon from '../DefaultIcon/DefaultIcon';

interface FloatButtonProps extends TouchableOpacityProps {}

const FloatButton: React.FC<FloatButtonProps> = ({ ...touchableProps }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      {...touchableProps}>
      <DefaultIcon name="plus" size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: theme.palette.secondary,
    height: 64,
    width: 64,
    elevation: 4,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatButton;
