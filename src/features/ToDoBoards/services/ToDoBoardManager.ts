/**
 * Use this to apply business rules on data input/output
 */

import { IBoard } from '../../../shared/types';
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
    } catch (error) {
      throw new Error('Error on getBoards');
    }
  }

  async getColumns(boardName: string) {
    try {
      const resp = await this.repo.fetchBoards();
      return resp;
    } catch (error) {
      throw new Error('Error on getBoards');
    }
  }

  async createNewBoard(board: IBoard) {
    try {
      const boards = await this.repo.fetchBoards();
      if (boards) {
        boards.push(board);
        await this.repo.updateBoards(boards);
      } else {
        await this.repo.updateBoards([board]);
      }
    } catch (error) {
      throw new Error('Error on createNewBoard');
    }
  }
}
