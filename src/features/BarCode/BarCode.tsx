import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface BarCodeProps {}

const BarCode: React.FC<BarCodeProps> = () => {
  return (
    <View>
      <Text>BarCode</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BarCode;
