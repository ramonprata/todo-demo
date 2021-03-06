import { IColumn, ITask } from '../../../shared/types';
import * as assynStorage from '../../../shared/utils/asyncStorage';
import {
  STORAGE_TASKS_KEY,
  STORAGE_COLUMNS_KEY,
} from '../../../shared/constants/storageKeys';

export default class ToDoFormRepository {
  updateColumns(columns: IColumn[]) {
    return assynStorage.storeObjectData<IColumn[]>(
      STORAGE_COLUMNS_KEY,
      columns,
    );
  }

  fetchColumns() {
    return assynStorage.getObjectData<IColumn[]>(STORAGE_COLUMNS_KEY);
  }

  updateTasks(boards: ITask[]) {
    return assynStorage.storeObjectData<ITask[]>(STORAGE_TASKS_KEY, boards);
  }

  fetchTasks() {
    return assynStorage.getObjectData<ITask[]>(STORAGE_TASKS_KEY);
  }
}
