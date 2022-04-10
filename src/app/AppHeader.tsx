import { DrawerHeaderProps } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { theme } from '../shared';
import { DefaultIcon } from '../shared/components';

interface AppHeaderProps {
  drawerProps: DrawerHeaderProps;
}

const AppHeader: React.FC<AppHeaderProps> = ({ drawerProps }) => {
  const { navigation, route } = drawerProps;
  return (
    <View style={styles.container}>
      <Pressable onPress={navigation.openDrawer}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <DefaultIcon name="menu" color="primary" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{`POCs - ${
              (route.params as { title: string })?.title
            }`}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.palette.primary,
  },
});

export default AppHeader;
