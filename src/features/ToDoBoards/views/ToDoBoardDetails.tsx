import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import {
  ERouteNames,
  TToDoStackParamList,
  TUseNavigation,
} from '../../../shared/types';
import { Card } from '../../../shared/components';
import AddBoardButton from './AddBoardButton';
import { DeviceFeatures } from '../../../shared';

interface ToDoBoardDetailsProps {}

const ToDoBoardDetails: React.FC<ToDoBoardDetailsProps> = () => {
  const route = useRoute<RouteProp<TToDoStackParamList>>();
  const navigation = useNavigation<TUseNavigation>();
  const [columns, setColumns] = useState([{ isColumn: false }]);

  const handleCreateColumn = () => {
    navigation.navigate(ERouteNames.TODO_COLUMN_FORM);
  };

  // let carouselRef = useRef<any | null>(null);

  const renderItem = (item: { isColumn: boolean }) => {
    if (item.isColumn) {
      return (
        <View style={styles.columnContainer}>
          <Card title="ToDoBoard">
            {/* <Card variantColor="white">
            <Text>content</Text>
          </Card> */}
          </Card>
        </View>
      );
    } else {
      return (
        <View style={styles.columnContainer}>
          <AddBoardButton buttonTitle="Add list" onAdd={handleCreateColumn} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: route?.params?.board?.imagePath,
        }}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {columns.map(c => renderItem(c))}
        </ScrollView>
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
    paddingVertical: 16,
  },
  columnContainer: {
    width: DeviceFeatures.width * 0.8,
    marginHorizontal: 12,
    height: '100%',
    backgroundColor: 'violet',
  },
});

export default ToDoBoardDetails;
