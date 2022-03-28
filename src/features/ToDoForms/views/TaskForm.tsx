import React from 'react';
import { Alert } from 'react-native';
import GenericForm from './GenericForm';

interface TaskFormProps {}

const TaskForm: React.FC<TaskFormProps> = () => {
  const [value, setValue] = React.useState('');
  const onChangeText = (t: string) => setValue(t);

  return (
    <GenericForm
      textProps={{
        value,
        label: "Task's name",
        onChangeText: onChangeText,
        placeholder: 'type here..',
      }}
      buttonProps={{
        title: 'Save task',
        onPress: () => Alert.alert('create a new task'),
      }}
    />
  );
};

export default TaskForm;
