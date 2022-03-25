import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TToDoStackParamList } from '../../../shared/types';
import { Card } from '../../../shared/components';
import AddBoardButton from './AddBoardButton';

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
        <Card title="ToDoBoard">
          <Card variantColor="white">
            <Text>content</Text>
          </Card>
        </Card>
        {/* <AddBoardButton buttonTitle="Add list" /> */}
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
    padding: 16,
  },
});

export default ToDoBoardDetails;
