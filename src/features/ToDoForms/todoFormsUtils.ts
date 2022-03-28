import { getRandomIndex, mockImages } from '../../shared';
import { IBoard } from '../../shared/types';

export const STORAGE_TASKS_KEY = '@storage_tasks_key';
export const STORAGE_COLUMNS_KEY = '@storage_columns_key';

export const mountNewBoard = (boarName: string): IBoard => {
  const randomIndex = getRandomIndex(mockImages.length);
  return {
    title: boarName,
    imagePath: mockImages[randomIndex],
  };
};
