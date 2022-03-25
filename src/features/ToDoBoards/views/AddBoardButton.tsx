import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from '../../../shared/components';

interface AddBoardButtonProps {
  buttonTitle: string;
}

const AddBoardButton: React.FC<AddBoardButtonProps> = ({ buttonTitle }) => {
  return (
    <Card title="ToDoBoard">
      <Card variantColor="white">
        <TouchableOpacity style={styles.container}>
          <Text>{buttonTitle}</Text>
        </TouchableOpacity>
      </Card>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddBoardButton;
