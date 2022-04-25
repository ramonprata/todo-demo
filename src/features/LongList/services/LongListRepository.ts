import { IRickMortyResponse } from '../../../shared/types/apiResponses/IRickMortyResponse';

class LongListRepository {
  async fetchAllCharacters(): Promise<IRickMortyResponse[]> {
    const promises = [];
    for (let index = 1; index < 43; index++) {
      const URL = `https://rickandmortyapi.com/api/character/?page=${index}`;
      promises.push(fetch(URL));
    }
    const responses = await Promise.all(promises);
    const responsesData = await Promise.all(responses.map(r => r.json()));
    return responsesData as IRickMortyResponse[];
  }

  async fetchCharactersPage(page: number): Promise<IRickMortyResponse> {
    const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(URL);
    return response.json() as Promise<IRickMortyResponse>;
  }
}

export default LongListRepository;
