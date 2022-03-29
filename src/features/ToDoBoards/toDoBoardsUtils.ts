import { IColumn } from '../../shared/types';

export const getColumnsByBoardName = (
  columns: { [key: string]: IColumn },
  boardName: string,
): { [key: string]: IColumn } => {
  const result = Object.values(columns);
  // .reduce((previous, current: IColumn) => {
  //   return {
  //     ...previous,
  //     [current.title]: { ...current },
  //   };
  // }, {});
  return result;
};
