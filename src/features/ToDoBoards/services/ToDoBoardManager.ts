/**
 * Use this to apply business rules on data input/output
 */

import ToDoBoardRepository from './ToDoBoardRepository';

export default class ManagerName {
  repo: ToDoBoardRepository;

  constructor() {
    this.repo = new ToDoBoardRepository();
  }
}
