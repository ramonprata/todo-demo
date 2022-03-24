import React from 'react';
import { StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { IBoard } from '../../../shared/types';

interface ToDoBoardItemProps {
  board: IBoard;
  onSelectBoard: () => void;
}

const ToDoBoardItem: React.FC<ToDoBoardItemProps> = ({
  onSelectBoard,
  board,
}) => {
  const { wrapper, itemContainer, imageContainer, itemBody, image, title } =
    styles;
  return (
    <Pressable onPress={onSelectBoard} style={wrapper}>
      <View style={itemContainer}>
        <View style={imageContainer}>
          <Image
            style={image}
            source={{
              uri: board.imagePath,
            }}
          />
        </View>
        <View style={itemBody}>
          <Text style={title}>{board.title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    minHeight: 64,
    marginBottom: 8,
  },

  itemContainer: {
    flexDirection: 'row',
    minHeight: 64,
    alignItems: 'center',
  },

  imageContainer: {
    width: 64,
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },

  itemBody: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ToDoBoardItem;
