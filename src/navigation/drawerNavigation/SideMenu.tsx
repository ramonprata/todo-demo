import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ERouteNames, TUseNavigation } from '../../shared/types';
import { theme } from '../../shared';
import { DefaultIcon } from '../../shared/components';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
const Drawer = createDrawerNavigator();

interface SideMenuProps {
  closeDrawer: DrawerNavigationHelpers['closeDrawer'];
}

const SideMenu: React.FC<SideMenuProps> = ({ closeDrawer }) => {
  const navigation = useNavigation<TUseNavigation>();

  const goToDo = () => {
    navigation.navigate({
      name: ERouteNames.TO_DO_STACK,
      params: {},
    });
  };

  const goToBardCode = () => {
    navigation.navigate(ERouteNames.BAR_CODE);
  };

  const goToLongList = () => {
    navigation.navigate(ERouteNames.LONG_LIST);
  };

  const goToLanguages = () => {
    navigation.navigate(ERouteNames.LANGUAGES);
  };

  return (
    <View>
      <View style={styles.menuHeader}>
        <Text style={styles.menuTitle}>Menu</Text>
        <Pressable onPress={closeDrawer}>
          <DefaultIcon name="x" color="primary" />
        </Pressable>
      </View>
      <Pressable onPress={goToDo}>
        <View style={styles.itemContainer}>
          <Text>POC - Todo app</Text>
        </View>
      </Pressable>
      <Pressable onPress={goToBardCode}>
        <View style={styles.itemContainer}>
          <Text>POC - Bardcode</Text>
        </View>
      </Pressable>
      <Pressable onPress={goToLongList}>
        <View style={styles.itemContainer}>
          <Text>POC - Long List</Text>
        </View>
      </Pressable>
      <Pressable onPress={goToLanguages}>
        <View style={styles.itemContainer}>
          <Text>POC - i18n</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuHeader: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuTitle: {
    color: theme.palette.primary,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.light,
  },
});

export default SideMenu;
