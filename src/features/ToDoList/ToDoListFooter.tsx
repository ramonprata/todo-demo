import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TouchableButton } from '../../shared/components';

interface ToDoListFooterProps {
  onAddTask: () => void;
}

const ToDoListFooter: React.FC<ToDoListFooterProps> = ({ onAddTask }) => {
  return (
    <View style={styles.container}>
      <TouchableButton onPress={onAddTask} title="Add task" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});

export default ToDoListFooter;
