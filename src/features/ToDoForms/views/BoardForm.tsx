import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { DEFAULT_ERROR_MESSAGE } from '../../../shared';
import { ERouteNames, TUseNavigation } from '../../../shared/types';
import ToDoBoardManager from '../../ToDoBoards/services/ToDoBoardManager';
import { mountNewBoard } from '../todoFormsUtils';
import GenericForm from './GenericForm';

const Manager = new ToDoBoardManager();

interface BoardFormProps {}

const BoardForm: React.FC<BoardFormProps> = () => {
  const navigation = useNavigation<TUseNavigation>();
  const [value, setValue] = React.useState('');
  const onChangeText = (t: string) => setValue(t);

  const saveNewBoard = async () => {
    const newBoard = mountNewBoard(value);
    try {
      await Manager.createNewBoard(newBoard);
      navigation.navigate(ERouteNames.TO_DO_BOARDS);
    } catch (error) {
      Alert.alert(DEFAULT_ERROR_MESSAGE);
    }
  };

  return (
    <GenericForm
      textProps={{
        value,
        label: "Board's name",
        onChangeText: onChangeText,
        placeholder: 'type here..',
      }}
      buttonProps={{
        title: 'Save board',
        onPress: () => saveNewBoard(),
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default BoardForm;
