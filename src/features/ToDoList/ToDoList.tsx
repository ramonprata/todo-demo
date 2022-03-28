import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ERouteNames, ITask, TUseNavigation } from '../../shared/types';
import ToDoListItem from './ToDoListItem';
import ToDoListFooter from './ToDoListFooter';
import { useNavigation } from '@react-navigation/native';

interface ToDoListProps {
  items: ITask[];
  conlumnName: string;
}

const ToDoList: React.FC<ToDoListProps> = ({ items, conlumnName }) => {
  const navigation = useNavigation<TUseNavigation>();

  const handleAddTask = () => {
    navigation.navigate({
      name: ERouteNames.TODO_TASK_FORM,
      params: {
        conlumnName,
      },
    });
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={items}
      renderItem={({ item }) => <ToDoListItem task={item} />}
      ListFooterComponent={() => <ToDoListFooter onAddTask={handleAddTask} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ToDoList;
