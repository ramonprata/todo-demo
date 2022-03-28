import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../shared/components';
import { DeviceFeatures } from '../../shared';
import { ITask } from '../../shared/types';

interface ToDoListItemProps {
  task: ITask;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ task }) => {
  return (
    <View style={styles.container}>
      <Card variantColor="white" key={task.id}>
        <Text>{task.description}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default ToDoListItem;
