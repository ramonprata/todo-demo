import { IBoard } from '../../../shared/types';
import * as assynStorage from '../../../shared/utils/asyncStorage';
import { STORAGE_BOARDS_KEY } from '../toDoUtils';

export default class ToDoBoardRepository {
  updateBoards(boards: IBoard[]) {
    return assynStorage.storeObjectData<IBoard[]>(STORAGE_BOARDS_KEY, boards);
  }

  fetchBoards() {
    return assynStorage.getObjectData<IBoard[]>(STORAGE_BOARDS_KEY);
  }
}
