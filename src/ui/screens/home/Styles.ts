import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    position: 'relative',
  },
  fans_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fans_header_title: {
    fontSize: 28,
    color: '#000',
  },
  fans_header_btn: {
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
    padding: 5,
    borderRadius: 4,
  },
  fans_heightSpace: {
    height: 20,
  },
  fans_cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fans_cards_item: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  fans_cards_widthSpace: {
    width: 10,
  },
  fans_cards_count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  fans_cards_countType: {
    color: '#000',
  },
  characterList: {
    flex: 1,
  },
  characterList_separator: {
    height: 5,
  },
  characterList_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  characterList_item_title: {},
  characterList_item_icon: {
    fontSize: 20,
    color: 'red',
  },
});

export default styles;
