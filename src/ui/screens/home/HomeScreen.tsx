import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../logic/hooks/redux';
import {
  addFavorite,
  fetchCharacters,
  clearFavorite,
} from '../../../logic/store/reducers/character/ActionCreator';
import styles from './Styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackRoute} from '../../../logic/navigation/Interfaces';
import {useNavigation} from '@react-navigation/native';
import {TNavigation} from './Interface';

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<TNavigation>();
  const dispatch = useAppDispatch();
  const {characters, page, isNext, favorite} = useAppSelector(
    state => state.characterReducer,
  );

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.fans_header}>
          <Text style={styles.fans_header_title}>Fans</Text>
          <TouchableOpacity onPress={onClearFavorite}>
            <Text style={styles.fans_header_btn}>CLEAR FANS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fans_heightSpace} />
        <View style={styles.fans_cards}>
          <View style={styles.fans_cards_item}>
            <Text style={styles.fans_cards_count}>{favorite.female}</Text>
            <Text style={styles.fans_cards_countType}>Female Fans</Text>
          </View>
          <View style={styles.fans_cards_widthSpace} />
          <View style={styles.fans_cards_item}>
            <Text style={styles.fans_cards_count}>{favorite.male}</Text>
            <Text style={styles.fans_cards_countType}>Male Fans</Text>
          </View>
          <View style={styles.fans_cards_widthSpace} />
          <View style={styles.fans_cards_item}>
            <Text style={styles.fans_cards_count}>{favorite.other}</Text>
            <Text style={styles.fans_cards_countType}>Other</Text>
          </View>
        </View>
      </View>
      <View style={styles.fans_heightSpace} />
      <FlatList
        style={styles.characterList}
        data={characters}
        keyExtractor={(item, index) => `${index}`}
        onEndReached={onEndReached}
        ItemSeparatorComponent={() => (
          <View style={styles.characterList_separator} />
        )}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPressListItem(item.name)}>
            <View style={styles.characterList_item}>
              <Text style={styles.characterList_item_title}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => onAddFavorite(item.gender, item.name)}>
                <Icon
                  name={
                    !favorite.characters.includes(item.name)
                      ? 'favorite-border'
                      : 'favorite'
                  }
                  style={styles.characterList_item_icon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );

  function getCharacters() {
    dispatch(fetchCharacters({page: 1}));
  }

  function onEndReached() {
    if (isNext) {
      dispatch(fetchCharacters({page: page + 1}));
    }
  }

  function onAddFavorite(gender: string, name: string) {
    if (!favorite.characters.includes(name)) {
      dispatch(addFavorite(gender, name));
    }
  }

  function onClearFavorite() {
    dispatch(clearFavorite());
  }
  function onPressListItem(name: string) {
    navigation.navigate(RootStackRoute.details, {name});
  }
}

export default HomeScreen;
