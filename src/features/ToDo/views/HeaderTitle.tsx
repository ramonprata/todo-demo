import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../../../shared';

interface HeaderTitleProps {
  title: string;
  hasIcon?: boolean;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  hasIcon = false,
}) => {
  const styles = getStyles(hasIcon);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const getStyles = (hasIcon: boolean) =>
  StyleSheet.create({
    container: {
      marginLeft: hasIcon ? 16 : 0,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      color: theme.palette.white,
    },
  });

export default HeaderTitle;
