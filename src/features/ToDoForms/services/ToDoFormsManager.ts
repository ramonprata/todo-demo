/**
 * Use this to apply business rules on data input/output
 */

import { IColumn, ITask } from '../../../shared/types';
import ToDoFormsRepository from './ToDoFormsRepository';

export default class ToDoFormsManager {
  repo: ToDoFormsRepository;

  constructor() {
    this.repo = new ToDoFormsRepository();
  }

  async addColumn(column: IColumn) {
    try {
      let newColumns;
      const columns = await this.repo.fetchColumns();
      if (columns) {
        columns.push(column);
        newColumns = columns;
      } else {
        newColumns = [column];
      }

      await this.repo.updateColumns(newColumns);
    } catch (error) {
      throw new Error('Failed on creating column');
    }
  }
}
