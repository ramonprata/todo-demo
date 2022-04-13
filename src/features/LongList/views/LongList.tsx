import React, { useCallback, useMemo, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { theme, usePromise } from '../../../shared';
import LongListManager from '../services/LongListManager';
import ListItem from './ListItem';
import { ICharacter } from '../../../shared/types/ICharacter';
import { SearchInput } from '../../../shared/components';
import { filterCharacters } from '../longListUtils';
import { useVoiceRecognition } from '../../../shared/hooks';

const Manager = new LongListManager();

interface LongListProps {}

const LongList: React.FC<LongListProps> = () => {
  const [searchText, setSearchText] = useState('');

  const isFocused = useIsFocused();

  const loadChacters = useCallback(() => {
    if (isFocused) {
      return Manager.getCharacters();
    }
    return null;
  }, [isFocused]);

  const { data } = usePromise(loadChacters);

  const { startRecognizing, stopRecognizing, results } = useVoiceRecognition();

  const filteredItems = useMemo(() => {
    if (data?.length) {
      return filterCharacters(data as ICharacter[], results);
    }
    return [];
  }, [results, data]);

  const renderItem = ({ item }: { item: ICharacter }) => (
    <ListItem character={item} />
  );

  return (
    <View style={styles.container}>
      <SearchInput
        onChangeText={t => {
          setSearchText(t);
        }}
        value={searchText}
        useVoiceSearch
        onPressInMic={startRecognizing}
        onPressOutMic={stopRecognizing}
      />
      <Text style={styles.textResults}>Words: {results}</Text>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.image}
        initialNumToRender={12}
        getItemLayout={(_, index) => ({
          length: hp('15%'),
          offset: hp('15%') * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16181d',
  },
  textResults: {
    padding: 16,
    color: theme.palette.white,
  },
});

export default LongList;
