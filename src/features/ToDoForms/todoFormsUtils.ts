import { getRandomIndex, mockImages } from '../../shared';
import { IBoard, IColumn } from '../../shared/types';

export const mountNewBoard = (boarName: string): IBoard => {
  const randomIndex = getRandomIndex(mockImages.length);
  return {
    title: boarName,
    imagePath: mockImages[randomIndex],
    columns: [],
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
