import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInputForm } from '../../../shared/components';

interface BoardFormProps {}

const BoardForm: React.FC<BoardFormProps> = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInputForm
        value={value}
        label="Board Name"
        onChangeText={(text: string) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default BoardForm;
