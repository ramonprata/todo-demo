import React from 'react';
import '../../../shared/utils/mockRNThirdLib.js';
import * as navigationHooks from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import LongList from '../views/LongList';
import * as voiceRecognitionHook from '../../../shared/hooks/useVoiceRecognition';
import LongListManagerMock from '../services/LongListManager';
import { rickMortyResponseMock } from './mocks/rickMortyResponse.mock.js';
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
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    LongListManagerInstance = LongListManagerMock.mock.instances[0];

    voiceRecognitionHook.useVoiceRecognition.mockReturnValue({
      startRecognizing: jest.fn(),
      stopRecognizing: jest.fn(),
      results: '',
    });
  });
  it('should render loading while fetching data, and than the list of characters ', async () => {
    LongListManagerInstance.getCharacters.mockResolvedValueOnce(
      rickMortyResponseMock.results,
    );

    navigationHooks.useIsFocused.mockReturnValueOnce(true);

    const screeen = render(<LongList />);

    expect(screeen.queryByText(/Loading/)).not.toBeNull();

    await waitFor(() =>
      expect(LongListManagerInstance.getCharacters).toHaveBeenCalled(),
    );

    expect(screeen.queryByText(/Rick/)).not.toBeNull();
    expect(screeen.queryByText(/Pizza-person/)).not.toBeNull();
  });
  it('should render loading and not call manager to fetch data ', async () => {
    LongListManagerInstance.getCharacters.mockResolvedValueOnce(
      rickMortyResponseMock.results,
    );

    navigationHooks.useIsFocused.mockReturnValueOnce(false);

    const screeen = render(<LongList />);

    expect(screeen.queryByText(/Loading/)).not.toBeNull();

    await waitFor(() =>
      expect(LongListManagerInstance.getCharacters).not.toHaveBeenCalled(),
    );
    expect(screeen.queryByText(/Nothing to show/)).not.toBeNull();
  });

  describe('Testing search list', () => {
    beforeEach(() => {
      LongListManagerInstance.getCharacters.mockResolvedValueOnce(
        rickMortyResponseMock.results,
      );

      navigationHooks.useIsFocused.mockReturnValueOnce(false);
    });

    it('should render search field', async () => {
      const screeen = render(<LongList />);

      await waitFor(() =>
        expect(LongListManagerInstance.getCharacters).not.toHaveBeenCalled(),
      );

      const searchComponent = screeen.queryByTestId('search-input-charcters');
      expect(searchComponent).not.toBeNull();
      expect(searchComponent.props.placeholder).toMatch('Search');
    });

    it('should call longListUtils.filterCharacters when typing in search text', async () => {
      LongListManagerInstance.getCharacters.mockResolvedValueOnce(
        rickMortyResponseMock.results,
      );

      navigationHooks.useIsFocused.mockReturnValueOnce(true);

      const screeen = render(<LongList />);

      await waitFor(() =>
        expect(LongListManagerInstance.getCharacters).toHaveBeenCalled(),
      );

      const searchComponent = screeen.queryByTestId('search-input-charcters');
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
