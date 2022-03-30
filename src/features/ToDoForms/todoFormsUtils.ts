import { IBoard, IColumn } from '../../shared/types';

export const mountNewBoard = (boarName: string): IBoard => {
  return {
    title: boarName,
    imagePath: 'https://picsum.photos/600/900',
  };
};

export const mountNewColumn = (
  boardName: string,
  columnTitle: string,
): IColumn => {
  return {
    boardName,
    title: columnTitle,
    tasks: [],
  };
};
