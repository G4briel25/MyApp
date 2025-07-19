import { combineReducers } from '@reduxjs/toolkit';
import mesaReducer from './slices/mesaSlice';
import { Reducer } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  mesas: mesaReducer
});

export default rootReducer as Reducer;