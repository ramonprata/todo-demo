import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { theme } from '../../../shared';
import { Card } from '../../../shared/components';

interface AddBoardButtonProps {
  buttonTitle: string;
  onAdd: () => void;
}

const AddBoardButton: React.FC<AddBoardButtonProps> = ({
  buttonTitle,
  onAdd,
}) => {
  return (
    <Card variantColor="white" noPadding>
      <TouchableOpacity style={styles.container} onPress={onAdd}>
        <Text style={styles.buttonTitle}>{buttonTitle}</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.palette.secondary,
  },
});

export default AddBoardButton;
