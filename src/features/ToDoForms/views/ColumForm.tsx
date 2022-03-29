import React from 'react';
import { Alert } from 'react-native';
import GenericForm from './GenericForm';
import ToDoFormsManager from '../services/ToDoFormsManager';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TToDoStackParamList } from '../../../shared/types';
import { mountNewColumn } from '../todoFormsUtils';

const Manager = new ToDoFormsManager();

interface ColumFormProps {}

const ColumForm: React.FC<ColumFormProps> = () => {
  const route = useRoute<RouteProp<Partial<TToDoStackParamList>>>();
  const [value, setValue] = React.useState('');
  const onChangeText = (t: string) => setValue(t);

  const handleSaveColumn = async () => {
    try {
      const newColumn = mountNewColumn(
        (route.params as TToDoStackParamList['ToDoColumnForm'])?.boardName,
        value,
      );
      await Manager.addColumn(newColumn);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  return (
    <GenericForm
      textProps={{
        value,
        label: "Column's name",
        onChangeText: onChangeText,
        placeholder: 'type here..',
      }}
      buttonProps={{
        title: 'Save column',
        onPress: handleSaveColumn,
      }}
    />
  );
};

export default ColumForm;
