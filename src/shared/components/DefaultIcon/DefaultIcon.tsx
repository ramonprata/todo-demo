import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../../theme';
import { TPaletteColors } from '../../types/TPaletteColors';

interface DefaultIconProps {
  name: string;
  color?: TPaletteColors;
  size?: number;
}

const DefaultIcon: React.FC<DefaultIconProps> = ({
  size = 24,
  name,
  color = 'white',
}) => {
  return <Icon size={size} name={name} color={theme.palette[color]} />;
};

export default DefaultIcon;
