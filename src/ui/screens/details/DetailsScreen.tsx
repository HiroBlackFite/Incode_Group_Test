import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './Styles';
import {useRoute} from '@react-navigation/native';
import {TRoute} from './Interface';
import {useAppSelector} from '../../../logic/hooks/redux';

function DetailsScreen(): React.JSX.Element {
  const route = useRoute<TRoute>();
  const {characters} = useAppSelector(state => state.characterReducer);
  const {name} = route.params;

  const character = characters.filter(value => value.name === name)[0];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.character_item}>
        Birth year: {character.birth_year}
      </Text>
      <Text style={styles.character_item}>
        Eye color: {character.eye_color}
      </Text>
      <Text style={styles.character_item}>Gender: {character.gender}</Text>
      <Text style={styles.character_item}>
        Hair color: {character.hair_color}
      </Text>
      <Text style={styles.character_item}>Height: {character.height}</Text>
      <Text style={styles.character_item}>Mass: {character.mass}</Text>
      <Text style={styles.character_item}>
        Skin color: {character.skin_color}
      </Text>
    </SafeAreaView>
  );
}

export default DetailsScreen;
