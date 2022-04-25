import { extractResponseResults, filterCharacters } from '../longListUtils';
import { rickMortyResponseMock } from './mocks/rickMortyResponse.mock';
import { objectMatchText } from '../../../shared/utils/generalUtils';

jest.mock('../../../shared/utils/generalUtils', () => ({
  objectMatchText: jest.fn(),
}));

describe('Tests on longListUtils', () => {
  describe('Testing extractResponseResults', () => {
    it('should return an array of results characters', () => {
      // prepara o cenario

      // executa o que deve ser testado
      const res = extractResponseResults(rickMortyResponseMock);

      // faz aferições
      expect(res).toHaveLength(rickMortyResponseMock.results.length);
    });

    it('should return concatenated results when passed an array of responses', () => {
      const res = extractResponseResults([
        rickMortyResponseMock,
        rickMortyResponseMock,
      ]);
      expect(res).toHaveLength(rickMortyResponseMock.results.length * 2);
    });
  });

  describe('Testin filterCharacters ', () => {
    const characterOne = rickMortyResponseMock.results[0];
    const characterTwo = rickMortyResponseMock.results[1];
    const charactersToFilter = [characterOne, characterTwo];

    it('should call objectMatchText twice and retunr two characters searching by species: Human', () => {
      // prepara o cenario
      objectMatchText.mockReturnValue(true);

      // executa o que deve ser testado
      const res = filterCharacters(charactersToFilter, 'Human');

      // faz aferições
      expect(objectMatchText).toHaveBeenCalledTimes(2);
      expect(objectMatchText.mock.calls[0][0]).toEqual(characterOne);
      expect(objectMatchText.mock.calls[0][1]).toEqual('Human');
      expect(res).toHaveLength(2);
    });
  });
});
