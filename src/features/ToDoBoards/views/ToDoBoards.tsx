import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../shared';
import { ERouteNames, IBoard, TUseNavigation } from '../../../shared/types';
import ToDoBoardItem from './ToDoBoardItem';
import { FloatButton } from '../../../shared/components';
import { boards } from './toDoUtils';

interface ToDoBoardsProps {}

const ToDoBoards: React.FC<ToDoBoardsProps> = () => {
  const navigation = useNavigation<TUseNavigation>();

  const onSelectBoard = useCallback(
    (board: IBoard) => {
      navigation.navigate({
        name: ERouteNames.TODO_BOARD_DETAILS,
        params: {
          headerTitle: board.title,
          board,
        },
      });
    },
    [navigation],
  );

  const onAddNewBoard = () => {
    navigation.navigate(ERouteNames.TODO_BOARD_FORM);
  };

  const { container, subHeaderContainer, subTitle } = styles;
  return (
    <View style={container}>
      <View style={subHeaderContainer}>
        <Text style={subTitle}>Espaço de trabalho do Trello</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>
        {boards.map(b => (
          <ToDoBoardItem
            key={b.title}
            board={b}
            onSelectBoard={() => onSelectBoard(b)}
          />
        ))}
      </ScrollView>

      <FloatButton onPress={onAddNewBoard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white,
    flex: 1,
  },
  subHeaderContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    padding: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ToDoBoards;
