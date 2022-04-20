import { IRickMortyResponse, ICharacter } from '../../shared/types';
import { objectMatchText } from '../../shared/utils/generalUtils';

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
