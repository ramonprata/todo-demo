import React from 'react';
import { Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { theme } from '../../shared';
import {
  ERouteNames,
  TRouteNames,
  TToDoStackParamList,
} from '../../shared/types';
import { DefaultIcon, HeaderTitle } from '../../shared/components';

import { ToDoBoards, ToDoBoardDetails } from '../../features/ToDoBoards';
import { BoardForm, ColumForm, TaskForm } from '../../features/ToDoForms';

const Stack = createNativeStackNavigator<TToDoStackParamList>();

const {
  TO_DO_BOARDS,
  TODO_BOARD_DETAILS,
  TODO_BOARD_FORM,
  TODO_COLUMN_FORM,
  TODO_TASK_FORM,
} = ERouteNames;

interface TodoStackProps {}

const TodoStack: React.FC<TodoStackProps> = () => {
  const renderHeaderLeftForm = (navigation: NavigationProp<any>) => (
    <Pressable onPress={() => navigation.goBack()}>
      <DefaultIcon name="x" />
    </Pressable>
  );

  const renderScreenForm = (
    routeName: TRouteNames,
    component: React.ComponentType<any>,
    title: string,
  ) => {
    return (
      <Stack.Screen
        name={routeName}
        component={component}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={title} hasIcon />,
          headerLeft: () => renderHeaderLeftForm(navigation),
          ...headerDefaultStylesForms,
        })}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName={TO_DO_BOARDS}>
      <Stack.Screen
        name={TO_DO_BOARDS}
        component={ToDoBoards}
        options={() => ({
          headerTitle: () => <HeaderTitle title="Boards" />,
          ...headerDefaultStyles,
        })}
      />

      <Stack.Screen
        name={TODO_BOARD_DETAILS}
        component={ToDoBoardDetails}
        options={({ route }) => ({
          headerTitle: () => <HeaderTitle title={route.params.headerTitle} />,
          ...headerDefaultStyles,
        })}
      />

      {renderScreenForm(TODO_BOARD_FORM, BoardForm, 'Create a board')}
      {renderScreenForm(TODO_COLUMN_FORM, ColumForm, 'Create a column')}
      {renderScreenForm(TODO_TASK_FORM, TaskForm, 'Create a task')}
    </Stack.Navigator>
  );
};

const headerDefaultStyles: Partial<NativeStackNavigationOptions> = {
  headerTintColor: theme.palette.white,
  headerStyle: {
    backgroundColor: theme.palette.primary,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  animation: 'slide_from_right',
};

const headerDefaultStylesForms: Partial<NativeStackNavigationOptions> = {
  ...headerDefaultStyles,
  headerBackVisible: false,
  animation: 'fade_from_bottom',
};

export default TodoStack;
