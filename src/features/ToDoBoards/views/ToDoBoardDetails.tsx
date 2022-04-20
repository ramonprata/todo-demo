import React, { useCallback, useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import {
  useRoute,
  RouteProp,
  useNavigation,
  useIsFocused,
} from '@react-navigation/native';
import {
  ERouteNames,
  IColumn,
  ITask,
  TToDoStackParamList,
  TUseNavigation,
} from '../../../shared/types';
import { Card } from '../../../shared/components';
import AddBoardButton from './AddColumnButton';
import { usePromise } from '../../../shared/hooks';
import { DeviceFeatures } from '../../../shared/base';
import ToDoList from '../../ToDoList/ToDoList';
import ToDoBoardManager from '../services/ToDoBoardManager';

const Manager = new ToDoBoardManager();

interface ToDoBoardDetailsProps {}

const ToDoBoardDetails: React.FC<ToDoBoardDetailsProps> = () => {
  const route = useRoute<RouteProp<Partial<TToDoStackParamList>>>();
  const navigation = useNavigation<TUseNavigation>();
  const isFocused = useIsFocused();

  const selectedBoard = (
    route?.params as TToDoStackParamList['ToDoBoardDetails']
  )?.board;

  const loadColumns = useCallback(() => {
    if (isFocused) {
      return Manager.getColumns(selectedBoard.title);
    }
    return null;
  }, [isFocused]);

  const { data: columns, ...promiseStatus } = usePromise(loadColumns);

  const handleCreateColumn = () => {
    navigation.navigate({
      name: ERouteNames.TODO_COLUMN_FORM,
      params: {
        boardName: selectedBoard.title,
      },
    });
  };

  const renderColumn = (item: IColumn) => {
    const { title, tasks } = item;
    return (
      <View style={styles.columnContainer} key={title}>
        <Card title={title}>
          <ToDoList conlumnName={title} items={tasks} />
        </Card>
      </View>
    );
  };

  const shoudRender = promiseStatus.done && columns;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: selectedBoard?.imagePath,
        }}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shoudRender && columns.map(c => renderColumn(c))}
          <View style={styles.columnContainer}>
            <AddBoardButton buttonTitle="Add list" onAdd={handleCreateColumn} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingVertical: 16,
  },

  columnContainer: {
    width: DeviceFeatures.width * 0.9,
    marginHorizontal: 12,
    height: '100%',
  },
});

export default ToDoBoardDetails;
