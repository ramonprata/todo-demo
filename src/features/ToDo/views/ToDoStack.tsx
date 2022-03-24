import React from 'react';
import { theme } from '../../../shared';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';

import { NavigationProp } from '@react-navigation/native';

import {
  ERouteNames,
  TRouteNames,
  TToDoStackParamList,
} from '../../../shared/types';

import ToDoBoards from './ToDoBoards';
import ToDoBoardDetails from './ToDoBoardDetails';
import BoardForm from '../../ToDoForms/views/BoardForm';
import ColumForm from '../../ToDoForms/views/ColumForm';
import TaskForm from '../../ToDoForms/views/TaskForm';
import { DefaultIcon } from '../../../shared/components';
import { Pressable } from 'react-native';
import HeaderTitle from './HeaderTitle';

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
