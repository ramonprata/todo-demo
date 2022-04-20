import { extractResponseResults, filterCharacters } from '../longListUtils';
import { rickMortyResponseMock } from './mocks/rickMortyResponse.mock';
import { objectMatchText } from '../../../shared/utils/generalUtils';

jest.mock('../../../shared/utils/generalUtils', () => ({
  objectMatchText: jest.fn(),
}));

describe('Tests on longListUtils', () => {
  describe('Testing extractResponseResults', () => {
    it('should return results array from response', () => {
      const res = extractResponseResults(rickMortyResponseMock);
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

  describe('Testing filterCharacters ', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    const characterOne = rickMortyResponseMock.results[0];
    const characterTwo = rickMortyResponseMock.results[1];
    const charactersToFilter = [characterOne, characterTwo];
    it(`should call objectMatchText twice and return two characters searching by species: Human`, () => {
      objectMatchText.mockReturnValue(true);
      const res = filterCharacters(charactersToFilter, 'Human');
      expect(objectMatchText).toHaveBeenCalledTimes(2);
      expect(res).toHaveLength(2);
    });
    it(`should call objectMatchText twice and return only one character by name: Rick`, () => {
      objectMatchText.mockImplementation((item, searchingText) => {
        return searchingText === item.name;
      });

      const res = filterCharacters(charactersToFilter, characterOne.name);
      expect(objectMatchText).toHaveBeenCalledTimes(2);
      expect(res).toHaveLength(1);
    });
  });
});
