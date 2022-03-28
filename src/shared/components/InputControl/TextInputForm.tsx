import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

interface TextInputFormProps {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (t: string) => void;
}

const TextInputForm: React.FC<TextInputFormProps> = ({
  label,
  value,
  onChangeText,
  placeholder = 'useless placeholder',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 12,
    color: theme.palette.secondary,
    marginBottom: 2,
  },
  input: {
    borderBottomColor: theme.palette.secondary,
    borderBottomWidth: 1,
    paddingTop: 8,
  },
});

export default TextInputForm;
