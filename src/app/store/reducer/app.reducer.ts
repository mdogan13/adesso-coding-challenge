import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app.actions';
import { Unit } from 'src/app/models/unit';
import UNITS_DATA from '../../constants/age-of-empires-units.json';

export interface AppState {
  unitList: Unit[];
  selectedUnit: Unit | null;
}

const initialState: AppState = {
  unitList: UNITS_DATA.units,
  selectedUnit: null,
};

export const reducer = createReducer(
  initialState,
  on(actions.setSelectedUnit, (state, action) => {
    return { ...state, selectedUnit: action.payload };
  })
);
