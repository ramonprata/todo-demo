export const getRandomIndex = (arrayLength: number) => {
  return Math.floor(Math.random() * (arrayLength - 1));
};

export const objectMatchText = <T extends object>(obj: T, searchText = '') => {
  const valuesMerged = Object.values(obj)
    .filter(value => typeof value === 'number' || typeof value === 'string')
    .join(' ');
  const normalizedString = valuesMerged
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  const normalizedSearchText = searchText
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  return normalizedSearchText
    .split(' ')
    .some(word => normalizedString.toUpperCase().includes(word.toUpperCase()));
};
