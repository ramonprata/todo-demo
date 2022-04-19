import { IRickMortyResponse } from '../../../shared/types/apiResponses/IRickMortyResponse';
import { extractResponseResults } from '../longListUtils';
import LongListRepository from './LongListRepository';

class LongListManager {
  private repo: LongListRepository;
  constructor() {
    this.repo = new LongListRepository();
  }

  handleError(error: unknown) {
    // hanling error code
    console.log('error :>> ', error);
  }

  async getCharacters(page?: number) {
    try {
      let response: IRickMortyResponse | IRickMortyResponse[];

      if (page) {
        response = await this.repo.fetchCharactersPage(page);
      } else {
        response = await this.repo.fetchAllCharacters();
      }

      return extractResponseResults(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}
export default LongListManager;
