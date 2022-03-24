export enum ERouteNames {
  TO_DO_BOARDS = 'ToDoBoards',
  TODO_BOARD_DETAILS = 'ToDoBoardDetails',
  TODO_BOARD_FORM = 'ToDoBoardForm',
  TODO_COLUMN_FORM = 'ToDoColumnForm',
  TODO_TASK_FORM = 'ToDoTaskForm',
}
export type TRouteNames =
  | ERouteNames.TO_DO_BOARDS
  | ERouteNames.TODO_BOARD_DETAILS
  | ERouteNames.TODO_BOARD_FORM
  | ERouteNames.TODO_COLUMN_FORM
  | ERouteNames.TODO_TASK_FORM;
