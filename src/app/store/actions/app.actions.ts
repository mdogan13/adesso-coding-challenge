import { createAction, props } from '@ngrx/store';
import { Unit } from 'src/app/models/unit';

export const setSelectedUnit = createAction(
  'SET_SELECTED_UNIT',
  props<{ payload: Unit }>()
);
export const setFilter = createAction(
  'SET_FILTER',
  props<{
    payload: { filterType: string; value: number[] | string | undefined };
  }>()
);

export const resetFilters = createAction('RESET_FILTERS');

export const resetSelectedUnit = createAction('RESET_SELECTED_UNIT');
