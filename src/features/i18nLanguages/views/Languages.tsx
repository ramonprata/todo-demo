import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { theme } from '../../../shared';
import { setLanguageToI18n, translate } from '../../../shared/locales';
import { EnumLanguages } from '../../../shared/locales/EnumLanguages';

interface LanguagesProps {}

const Languages: React.FC<LanguagesProps> = () => {
  setLanguageToI18n(EnumLanguages.EN_US);
  const enHello = translate('txtHello');
  const enIntro = translate('txtIntro');
  const enAddButton = translate('btnAdd');

  setLanguageToI18n(EnumLanguages.PT_BR);
  const ptHelloText = translate('txtHello');
  const ptIntro = translate('txtIntro');

  const ptAddButton = translate('btnAdd');

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>{enHello}</Text>
        <Text style={styles.text}>{enIntro}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>{ptHelloText}</Text>
        <Text style={styles.text}>{ptIntro}</Text>
      </View>
      <View style={styles.btcContainer}>
        <Button title={enAddButton} />
      </View>
      <View style={styles.btcContainer}>
        <Button title={ptAddButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textBox: {
    borderWidth: 1,
    borderColor: theme.palette.primary,
    borderRadius: 8,
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  btcContainer: {
    marginBottom: 16,
    width: '50%',
  },
});

export default Languages;
