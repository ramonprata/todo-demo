import React from 'react';
import { Alert } from 'react-native';
import GenericForm from './GenericForm';

interface ColumFormProps {}

const ColumForm: React.FC<ColumFormProps> = () => {
  const [value, setValue] = React.useState('');
  const onChangeText = (t: string) => setValue(t);

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
        onPress: () => Alert.alert('create a new column'),
      }}
    />
  );
};

export default ColumForm;
