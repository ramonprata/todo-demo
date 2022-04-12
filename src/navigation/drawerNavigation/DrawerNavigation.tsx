import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ERouteNames } from '../../shared/types';
import ToDoStack from '../todoStack/ToDoStack';
import SideMenu from './SideMenu';
import AppHeader from '../../app/AppHeader';
import BarCode from '../../features/BarCode/BarCode';
import LongList from '../../features/LongList/views/LongList';
const Drawer = createDrawerNavigator();

interface DrawerNavigationProps {}
const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ERouteNames.TO_DO_STACK}
      drawerContent={({ navigation }) => (
        <SideMenu closeDrawer={navigation.closeDrawer} />
      )}
      screenOptions={{
        header: ({ ...drawerProps }) => <AppHeader drawerProps={drawerProps} />,
      }}>
      <Drawer.Screen
        name={ERouteNames.TO_DO_STACK}
        component={ToDoStack}
        initialParams={{ title: 'Todo app' }}
      />
      <Drawer.Screen
        name={ERouteNames.BAR_CODE}
        component={BarCode}
        initialParams={{ title: 'Barcode' }}
      />
      <Drawer.Screen
        name={ERouteNames.LONG_LIST}
        component={LongList}
        initialParams={{ title: 'Long list' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
