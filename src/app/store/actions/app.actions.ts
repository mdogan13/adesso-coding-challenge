import { createAction, props } from '@ngrx/store';
import { Unit } from 'src/app/models/unit';

export const setSelectedUnit = createAction(
  'SET_SELECTED_UNIT',
  props<{ payload: Unit }>()
);
