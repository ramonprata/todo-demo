import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import GenericForm from './GenericForm';

interface BoardFormProps {}

const BoardForm: React.FC<BoardFormProps> = () => {
  const [value, setValue] = React.useState('');
  const onChangeText = (t: string) => setValue(t);

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
        onPress: () => Alert.alert('create a new board'),
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
