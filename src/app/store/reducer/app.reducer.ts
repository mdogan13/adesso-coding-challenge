import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app.actions';
import { Unit } from 'src/app/models/unit';
import UNITS_DATA from '../../constants/age-of-empires-units.json';

export interface AppState {
  unitList: Unit[];
  selectedUnit: Unit | undefined;
  filters: {
    age: string;
    wood: number[] | undefined;
    food: number[] | undefined;
    gold: number[] | undefined;
  };
}

const initialState: AppState = {
  unitList: UNITS_DATA.units,
  selectedUnit: undefined,
  filters: {
    age: 'all',
    wood: undefined,
    food: undefined,
    gold: undefined,
  },
};

export const reducer = createReducer(
  initialState,
  on(actions.setSelectedUnit, (state, action) => {
    return { ...state, selectedUnit: action.payload };
  }),
  on(actions.setFilter, (state, action) => {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.filterType]: action.payload.value,
      },
    };
  }),
  on(actions.resetFilters, (state) => {
    return {
      ...state,
      filters: initialState.filters,
    };
  }),
  on(actions.resetSelectedUnit, (state) => {
    return {
      ...state,
      selectedUnit: initialState.selectedUnit,
    };
  })
);
