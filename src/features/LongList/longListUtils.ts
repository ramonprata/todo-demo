import { objectMatchText } from '../../shared';
import { ICharacter } from '../../shared/types/ICharacter';

export const filterListItems = (items: ICharacter[], searchText: string) => {
  if (!searchText) {
    return items;
  }
  return items.filter(i => objectMatchText(i, searchText));
};
