import '../../../shared/utils/mockRNThirdLib';
import React from 'react';
import * as navigationHooks from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import LongList from '../views/LongList';
import * as voiceRecognitionHook from '../../../shared/hooks/useVoiceRecognition';
import LongListManagerMock from '../services/LongListManager';
import { rickMortyResponseMock } from './mocks/rickMortyResponse.mock';
import * as longListUtils from '../longListUtils';

jest.mock('../services/LongListManager');

jest.mock('../longListUtils', () => ({
  filterCharacters: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  return {
    useIsFocused: jest.fn(),
  };
});

jest.mock('../../../shared/components/DefaultIcon/DefaultIcon', () => {
  const { View } = require('react-native');
  return props => <View {...props} testID="searchIcon" />;
});

jest.mock('../../../shared/hooks/useVoiceRecognition', () => {
  return {
    useVoiceRecognition: jest.fn(),
  };
});

describe('Tests on LongList', () => {
  let LongListManagerInstance;

  beforeAll(() => {
    LongListManagerInstance = LongListManagerMock.mock.instances[0];

    LongListManagerInstance.getCharacters = jest.fn();

    voiceRecognitionHook.useVoiceRecognition.mockReturnValue({
      startRecognizing: jest.fn(),
      stopRecognizing: jest.fn(),
      results: '',
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render loading while fetching data, and than the list of characters ', async () => {
    LongListManagerInstance.getCharacters.mockResolvedValueOnce(
      rickMortyResponseMock.results,
    );
    // sobrescreve o mock glogal pra retornar a lista
    longListUtils.filterCharacters.mockImplementation(data => data);

    navigationHooks.useIsFocused.mockReturnValueOnce(true);

    const screen = render(<LongList />);

    expect(screen.queryByText(/Loading/)).not.toBeNull();

    await waitFor(() =>
      expect(LongListManagerInstance.getCharacters).toHaveBeenCalled(),
    );
    expect(screen.queryByText(/Rick/)).not.toBeNull();
    expect(screen.queryByText(/Pizza-person/)).not.toBeNull();
  });
  it('should render loading and not call manager to fetch data ', async () => {
    LongListManagerInstance.getCharacters.mockResolvedValueOnce(
      rickMortyResponseMock.results,
    );

    navigationHooks.useIsFocused.mockReturnValueOnce(false);

    const screen = render(<LongList />);

    expect(screen.queryByText(/Loading/)).not.toBeNull();

    await waitFor(() =>
      expect(LongListManagerInstance.getCharacters).not.toHaveBeenCalled(),
    );
    expect(screen.queryByText(/Nothing to show/)).not.toBeNull();
  });

  describe('Testing search list', () => {
    beforeEach(() => {
      LongListManagerInstance.getCharacters.mockResolvedValueOnce(
        rickMortyResponseMock.results,
      );

      navigationHooks.useIsFocused.mockReturnValueOnce(false);
    });

    it('should render search field', async () => {
      const screen = render(<LongList />);

      await waitFor(() =>
        expect(LongListManagerInstance.getCharacters).not.toHaveBeenCalled(),
      );

      const searchComponent = screen.queryByTestId('search-input-charcters');
      expect(searchComponent).not.toBeNull();
      expect(searchComponent.props.placeholder).toMatch('Search');
    });

    it('should call longListUtils.filterCharacters when typing in search text', async () => {
      LongListManagerInstance.getCharacters.mockResolvedValueOnce(
        rickMortyResponseMock.results,
      );

      navigationHooks.useIsFocused.mockReturnValueOnce(true);

      const screen = render(<LongList />);

      await waitFor(() =>
        expect(LongListManagerInstance.getCharacters).toHaveBeenCalled(),
      );

      const searchComponent = screen.queryByTestId('search-input-charcters');
      expect(searchComponent).not.toBeNull();
      expect(searchComponent.props.placeholder).toMatch('Search');
      await fireEvent.changeText(searchComponent, 'Rick');
      expect(longListUtils.filterCharacters).toHaveBeenCalledWith(
        rickMortyResponseMock.results,
        'Rick',
      );
    });
  });
});
