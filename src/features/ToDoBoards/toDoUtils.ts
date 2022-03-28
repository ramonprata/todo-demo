import { mockImages } from '../../shared';
import { IBoard } from '../../shared/types';

export const boards: IBoard[] = [
  {
    title: 'Board one',
    imagePath: mockImages[0],
  },
  {
    title: 'Board two',
    imagePath: mockImages[1],
  },
  {
    title: 'Board three',
    imagePath: mockImages[2],
  },
];

export const STORAGE_BOARDS_KEY = '@storage_boards_key';
export const STORAGE_COLUMNS_KEY = '@storage_columns_key';
