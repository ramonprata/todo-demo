/**
 * Use this to apply business rules on data input/output
 */

import ToDoBoardRepository from './ToDoBoardRepository';

export default class ToDoBoardManager {
  repo: ToDoBoardRepository;

  constructor() {
    this.repo = new ToDoBoardRepository();
  }

  async getBoards() {
    try {
      const resp = await this.repo.fetchBoards();
      return resp;
    } catch (error) {}
  }
}
