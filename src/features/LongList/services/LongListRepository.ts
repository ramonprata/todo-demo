import { IRickMortyResponse } from '../../../shared/types/apiResponses/IRickMortyResponse';

class LongListRepository {
  async fetchCharacters(): Promise<IRickMortyResponse['results']> {
    const promises = [];
    for (let index = 1; index < 43; index++) {
      const URL = `https://rickandmortyapi.com/api/character/?page=${index}`;
      promises.push(fetch(URL));
    }
    const responses = await Promise.all(promises);
    const responsesData = await Promise.all(responses.map(r => r.json()));
    return responsesData.reduce((prev, current) => {
      return prev.concat(current.results);
    }, []);
  }
}

export default LongListRepository;
