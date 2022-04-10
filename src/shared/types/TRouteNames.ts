export enum ERouteNames {
  SIDE_MENU = 'SideMenu',
  TO_DO_STACK = 'ToDoStack',
  TO_DO_BOARDS = 'ToDoBoards',
  TODO_BOARD_DETAILS = 'ToDoBoardDetails',
  TODO_BOARD_FORM = 'ToDoBoardForm',
  TODO_COLUMN_FORM = 'ToDoColumnForm',
  TODO_TASK_FORM = 'ToDoTaskForm',
  BAR_CODE = 'BarCode',
}
export type TRouteNames =
  | ERouteNames.SIDE_MENU
  | ERouteNames.TO_DO_STACK
  | ERouteNames.TO_DO_BOARDS
  | ERouteNames.TODO_BOARD_DETAILS
  | ERouteNames.TODO_BOARD_FORM
  | ERouteNames.TODO_COLUMN_FORM
  | ERouteNames.TODO_TASK_FORM
  | ERouteNames.BAR_CODE;
