import LongListRepository from './LongListRepository';

class LongListManager {
  private repo: LongListRepository;
  constructor() {
    this.repo = new LongListRepository();
  }
  async getCharacters() {
    try {
      const response = await this.repo.fetchCharacters();
      return response;
    } catch (error) {
      console.log('error:', error);
    }
  }
}
export default LongListManager;
