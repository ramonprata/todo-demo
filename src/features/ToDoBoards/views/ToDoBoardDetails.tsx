import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import {
  ERouteNames,
  IColumn,
  ITask,
  TToDoStackParamList,
  TUseNavigation,
} from '../../../shared/types';
import { Card } from '../../../shared/components';
import AddBoardButton from './AddBoardButton';
import { DeviceFeatures } from '../../../shared';
import ToDoList from '../../ToDoList/ToDoList';

interface ToDoBoardDetailsProps {}

const ToDoBoardDetails: React.FC<ToDoBoardDetailsProps> = () => {
  const route = useRoute<RouteProp<Partial<TToDoStackParamList>>>();
  const navigation = useNavigation<TUseNavigation>();

  const [columns, setColumns] = useState({
    'To Do': [
      {
        id: Math.random().toString(),
        description: 'Some task',
        status: 'Todo',
      },
      {
        id: Math.random().toString(),
        description: 'Some task',
        status: 'Todo',
      },
      {
        id: Math.random().toString(),
        description: 'Some task',
        status: 'Todo',
      },
      {
        id: Math.random().toString(),
        description: 'Some task',
        status: 'Todo',
      },
    ],
    Doing: [],
  });

  const handleCreateColumn = () => {
    navigation.navigate(ERouteNames.TODO_COLUMN_FORM);
  };

  const renderColumn = (item: [string, ITask[]]) => {
    const [title, tasks] = item;
    return (
      <View style={styles.columnContainer}>
        <Card title={title}>
          <ToDoList conlumnName={title} items={tasks} />
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: (route?.params as TToDoStackParamList['ToDoBoardDetails'])?.board
            ?.imagePath,
        }}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.entries(columns).map(c => renderColumn(c))}
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
    width: DeviceFeatures.width * 0.8,
    marginHorizontal: 12,
    height: '100%',
  },
});

export default ToDoBoardDetails;
