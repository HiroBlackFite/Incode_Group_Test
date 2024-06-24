import {combineReducers, configureStore} from '@reduxjs/toolkit/react';

import characterReducer from './reducers/character/CharacterSlice';

const rootReducer = combineReducers({
  characterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
