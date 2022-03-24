import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TToDoStackParamList } from '../../../shared/types';

interface ToDoBoardDetailsProps {}

const ToDoBoardDetails: React.FC<ToDoBoardDetailsProps> = () => {
  const route = useRoute<RouteProp<TToDoStackParamList>>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: route?.params?.board?.imagePath,
        }}
        resizeMode="cover"
        style={styles.image}>
        <Text>ToDoBoardDetails</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ToDoBoardDetails;
