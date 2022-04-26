import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IBoard } from '../IBoard';

import { ERouteNames } from '../TRouteNames';

export type TToDoStackParamList = {
  [ERouteNames.SIDE_MENU]: undefined;
  [ERouteNames.LONG_LIST]: undefined;
  [ERouteNames.LANGUAGES]: undefined;
  [ERouteNames.TO_DO_STACK]: { title?: string };
  [ERouteNames.TO_DO_BOARDS]: undefined;
  [ERouteNames.TODO_BOARD_FORM]: undefined;
  [ERouteNames.TODO_COLUMN_FORM]: {
    boardName: string;
  };
  [ERouteNames.TODO_TASK_FORM]: {
    conlumnName: string;
  };
  [ERouteNames.TODO_BOARD_DETAILS]: {
    headerTitle: string;
    board: IBoard;
  };

  [ERouteNames.BAR_CODE]: undefined;
};

export type TUseNavigation = NativeStackNavigationProp<TToDoStackParamList>;
