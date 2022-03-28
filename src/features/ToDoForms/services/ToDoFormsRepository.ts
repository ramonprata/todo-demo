import { ITask, IColumn } from '../../../shared/types';
import * as assynStorage from '../../../shared/utils/asyncStorage';
import { STORAGE_TASKS_KEY, STORAGE_COLUMNS_KEY } from '../todoFormsUtils';

export default class ToDoFormRepository {
  updateColumns(boards: IColumn[]) {
    return assynStorage.storeObjectData<IColumn[]>(STORAGE_COLUMNS_KEY, boards);
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
