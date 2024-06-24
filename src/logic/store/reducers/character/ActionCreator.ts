import {createAsyncThunk} from '@reduxjs/toolkit/react';
// import {AppDispatch} from '../..';
// import {characterSlice} from './CharacterSlice';
import {ICharacter} from '../../../models/ICharacter';
import {GET_CHARACTERS} from './Types';
import {APIGetPeople} from '../../../api/roots/people';
import {AppDispatch} from '../..';
import {characterSlice} from './CharacterSlice';

export const fetchCharacters = createAsyncThunk<
  {data: ICharacter[]; page: number; isNext: boolean},
  {page: number},
  {rejectValue: Error}
>(GET_CHARACTERS, async ({page}, {rejectWithValue}) => {
  try {
    const response = await APIGetPeople(page);
    return {data: response.results, page: page, isNext: response.next != null};
  } catch (error) {
    return rejectWithValue(error as Error);
  }
});

export const addFavorite =
  (gender: string, name: string) => async (dispatch: AppDispatch) => {
    dispatch(characterSlice.actions.addFavorite({gender, name}));
  };

export const clearFavorite = () => async (dispatch: AppDispatch) => {
  dispatch(characterSlice.actions.clearFavorite());
};
