import { objectMatchText } from '../../shared';
import { IRickMortyResponse } from '../../shared/types/apiResponses/IRickMortyResponse';
import { ICharacter } from '../../shared/types/ICharacter';

export const filterCharacters = (items: ICharacter[], searchText: string) => {
  if (!searchText) {
    return items;
  }
  return items.filter(i => objectMatchText(i, searchText));
};

export const extractResponseResults = (
  response: IRickMortyResponse | IRickMortyResponse[],
) => {
  if (Array.isArray(response)) {
    return response.reduce((prev: ICharacter[], current) => {
      return prev.concat(current.results);
    }, []);
  }
  return response.results;
};
