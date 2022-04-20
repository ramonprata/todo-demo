import LongListManager from '../services/LongListManager';
import * as longListUtils from '../longListUtils';
import rickMortyResponse from './mocks/rickMortyResponse.mock';

jest.mock('../services/LongListRepository', () => {
  return class LongListRepositoryMock {
    fetchCharactersPage = jest.fn();
    fetchAllCharacters = jest.fn();
  };
});

jest.mock('../longListUtils', () => {
  return { extractResponseResults: jest.fn() };
});

describe('Tests on LongListManager', () => {
  const manager = new LongListManager();

  beforeAll(() => {
    manager.handleError = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Testing  getCharacters', () => {
    it('should call repo fetchAllCharacters when page is not passed, and than extract results', async () => {
      const mockMultiPageResponse = [rickMortyResponse, rickMortyResponse];
      manager.repo.fetchAllCharacters.mockResolvedValueOnce(
        mockMultiPageResponse,
      );

      await manager.getCharacters();

      expect(manager.repo.fetchAllCharacters).toHaveBeenCalledTimes(1);
      expect(longListUtils.extractResponseResults).toHaveBeenCalledWith(
        mockMultiPageResponse,
      );
    });
    it('should call repo fetchCharactersPage when page is passed, and than extract results', async () => {
      manager.repo.fetchCharactersPage.mockResolvedValueOnce(rickMortyResponse);

      await manager.getCharacters(2);

      expect(manager.repo.fetchCharactersPage).toHaveBeenCalledTimes(1);
      expect(manager.repo.fetchCharactersPage).toHaveBeenCalledWith(2);
      expect(longListUtils.extractResponseResults).toHaveBeenCalledWith(
        rickMortyResponse,
      );
    });
    it('should call handleError when repo throws an error', async () => {
      const mockErrorFromRepo = new Error('error from repo');
      manager.repo.fetchCharactersPage.mockImplementationOnce(() => {
        throw mockErrorFromRepo;
      });

      await manager.getCharacters(2);

      expect(manager.handleError).toHaveBeenCalledTimes(1);
      expect(manager.handleError).toHaveBeenCalledWith(mockErrorFromRepo);
    });
  });
});
