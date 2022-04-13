import React from 'react';
import { View, TextInput, StyleSheet, TextProps } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { theme } from '../../theme';
import DefaultIcon from '../DefaultIcon/DefaultIcon';

interface SearchInputProps extends Partial<TextProps> {
  value: string;
  onChangeText: (text: string) => void;
  icon?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  icon,
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
      {icon && <DefaultIcon name={icon} size={24} color="light" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: hp('2%'),
    elevation: 2,
    flexDirection: 'row',
  },
  input: {
    padding: hp('2%'),
    borderRadius: hp('1%'),
    backgroundColor: '#20232a',
    color: theme.palette.white,
    fontSize: 18,
  },
  iconWrapper: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: 'violet',
  },
});

export default SearchInput;
