import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextProps,
  Pressable,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { theme } from '../../theme';
import DefaultIcon from '../DefaultIcon/DefaultIcon';

interface SearchInputProps extends Partial<TextProps> {
  value: string;
  onChangeText: (text: string) => void;
  onPressInMic?: () => void;
  onPressOutMic?: () => void;
  useVoiceSearch?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  useVoiceSearch = false,
  onPressInMic,
  onPressOutMic,
  ...textProps
}) => {
  const [isRecording, setIsRecording] = useState(false);

  const handlePressIn = () => {
    setIsRecording(true);
    if (useVoiceSearch) {
      onPressInMic?.();
    }
  };
  const handlePressOut = () => {
    setIsRecording(false);
    if (useVoiceSearch) {
      onPressOutMic?.();
    }
  };

  const styles = getStyles(isRecording);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={isRecording ? 'Recording...' : 'Search...'}
        placeholderTextColor={theme.palette.white}
        {...textProps}
      />
      {useVoiceSearch && (
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <View style={styles.iconWrapper}>
            <DefaultIcon name="mic" size={24} color="light" />
          </View>
        </Pressable>
      )}
    </View>
  );
};

const getStyles = (isRecording: boolean) =>
  StyleSheet.create({
    container: {
      padding: hp('2%'),
      elevation: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      padding: hp('2%'),
      borderRadius: hp('1%'),
      backgroundColor: isRecording
        ? theme.palette.primary
        : theme.palette.dark100,
      color: theme.palette.white,
      fontSize: 18,
    },
    iconWrapper: {
      width: wp('10%'),
      height: wp('10%'),
      borderRadius: wp('5%'),
      backgroundColor: isRecording
        ? theme.palette.primary
        : theme.palette.dark100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: wp('3%'),
    },
  });

export default SearchInput;
