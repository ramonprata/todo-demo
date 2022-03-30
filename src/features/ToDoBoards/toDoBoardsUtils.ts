import { IColumn } from '../../shared/types';

export const getColumnsByBoardName = (
  columns: IColumn[],
  boardName: string,
): IColumn[] => {
  const columnsOfBoard = columns.filter(c => c.boardName === boardName);
  return columnsOfBoard;
};
