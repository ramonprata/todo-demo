import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInputForm, TouchableButton } from '../../../shared/components';

interface GenericFormProps {
  textProps: {
    label: string;
    value: string;
    placeholder: string;
    onChangeText: (t: string) => void;
  };
  buttonProps: {
    onPress: () => void;
    title: string;
  };
}

const GenericForm: React.FC<GenericFormProps> = ({
  textProps,
  buttonProps,
}) => {
  return (
    <View style={styles.container}>
      <TextInputForm {...textProps} />

      <TouchableButton {...buttonProps} variant="m" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default GenericForm;
