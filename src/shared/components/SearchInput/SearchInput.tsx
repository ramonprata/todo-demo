import React from 'react';
import { View, TextInput, StyleSheet, TextProps } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

interface TextInputProps extends Partial<TextProps> {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  ...textProps
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={theme.palette.white}
        {...textProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: hp('2%'),
    elevation: 2,
  },
  input: {
    padding: hp('2%'),
    borderRadius: hp('1%'),
    backgroundColor: '#20232a',
    color: theme.palette.white,
    fontSize: 18,
  },
});

export default SearchInput;
