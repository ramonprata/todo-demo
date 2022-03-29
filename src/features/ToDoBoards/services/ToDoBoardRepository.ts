import {
  STORAGE_COLUMNS_KEY,
  STORAGE_BOARDS_KEY,
} from '../../../shared/constants/storageKeys';
import { IBoard, IColumn } from '../../../shared/types';
import * as assynStorage from '../../../shared/utils/asyncStorage';

export default class ToDoBoardRepository {
  updateBoards(boards: IBoard[]) {
    return assynStorage.storeObjectData<IBoard[]>(STORAGE_BOARDS_KEY, boards);
  }

  fetchBoards() {
    return assynStorage.getObjectData<IBoard[]>(STORAGE_BOARDS_KEY);
  }

  fetchColumns() {
    return assynStorage.getObjectData<{ [key: string]: IColumn }>(
      STORAGE_COLUMNS_KEY,
    );
  }
}
