import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IBoard } from '../IBoard';

import { ERouteNames } from '../TRouteNames';

export type TToDoStackParamList = {
  [ERouteNames.TO_DO_BOARDS]: undefined;
  [ERouteNames.TODO_BOARD_FORM]: undefined;
  [ERouteNames.TODO_COLUMN_FORM]: undefined;
  [ERouteNames.TODO_TASK_FORM]: undefined;
  [ERouteNames.TODO_BOARD_DETAILS]: {
    headerTitle: string;
    board: IBoard;
  };
};

export type TUseNavigation = NativeStackNavigationProp<TToDoStackParamList>;
