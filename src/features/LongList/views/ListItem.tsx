import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CardAvatar, OrientedView } from '../../../shared/components';
import { ICharacter } from '../../../shared/types/ICharacter';

interface ListItemProps {
  character: ICharacter;
}

const ListItem: React.FC<ListItemProps> = ({ character }) => {
  const { container, pContainer, lContainer } = styles;

  return (
    <OrientedView
      orientedProps={{
        defaultStyle: container,
        portraitStyle: pContainer,
        landscapeStyle: lContainer,
      }}>
      <CardAvatar
        imagePath={character.image}
        mainText={character.name}
        secText={`${character.status}-${character.species}`}
      />
    </OrientedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('15%'),
  },
  pContainer: {
    width: wp('100%'),
  },
  lContainer: {
    width: hp('100%'),
  },
});

export default React.memo(
  ListItem,
  (p, n) => p.character.image === n.character.image,
);
