import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducer/app.reducer';

const appState = createFeatureSelector<AppState>('aoeStore');

export const unitDataSelector = createSelector(appState, (state) => {
  return state.unitList;
});

export const selectedUnitSelector = createSelector(appState, (state) => {
  return state.selectedUnit;
});

export const filtersSelector = createSelector(appState, (state) => {
    return state.filters;
  });
