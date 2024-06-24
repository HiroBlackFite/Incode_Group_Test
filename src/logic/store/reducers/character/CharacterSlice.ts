import {PayloadAction, createSlice} from '@reduxjs/toolkit/react';
import {ICharacter} from '../../../models/ICharacter';
import {fetchCharacters} from './ActionCreator';

interface ICharacterState {
  characters: ICharacter[];
  isLoading: boolean;
  favorite: {
    male: number;
    female: number;
    other: number;
    characters: string[];
  };
  page: number;
  isNext: boolean;
  error?: Error;
}

const initialState: ICharacterState = {
  characters: [],
  favorite: {
    male: 0,
    female: 0,
    other: 0,
    characters: [],
  },
  page: 0,
  isNext: true,
  isLoading: false,
  error: undefined,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<{gender: string; name: string}>) {
      state.favorite.characters = [
        ...state.favorite.characters,
        action.payload.name,
      ];
      switch (action.payload.gender) {
        case 'female':
          state.favorite.female += 1;
          break;
        case 'male':
          state.favorite.male += 1;
          break;
        default:
          state.favorite.other += 1;
          break;
      }
    },
    clearFavorite(state) {
      state.favorite = {
        male: 0,
        female: 0,
        other: 0,
        characters: [],
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchCharacters.fulfilled.type,
      (
        state,
        action: PayloadAction<{
          data: ICharacter[];
          page: number;
          isNext: boolean;
        }>,
      ) => {
        state.isLoading = false;
        state.error = undefined;
        state.characters = [...state.characters, ...action.payload.data];
        state.page = action.payload.page;
        state.isNext = action.payload.isNext;
      },
    );
    builder.addCase(fetchCharacters.pending.type, state => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCharacters.rejected.type,
      (state, action: PayloadAction<Error>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});

export default characterSlice.reducer;
