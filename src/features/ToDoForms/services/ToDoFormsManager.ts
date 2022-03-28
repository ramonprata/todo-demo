/**
 * Use this to apply business rules on data input/output
 */

import ToDoFormsRepository from './ToDoFormsRepository';

export default class ManagerName {
  repo: ToDoFormsRepository;

  constructor() {
    this.repo = new ToDoFormsRepository();
  }
}
