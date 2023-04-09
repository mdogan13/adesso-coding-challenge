import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setFilter } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/reducer/app.reducer';

@Component({
  selector: 'app-unit-table-filter',
  templateUrl: './unit-table-filter.component.html',
  styleUrls: ['./unit-table-filter.component.scss'],
})
export class UnitTableFilterComponent implements OnInit {
  @ViewChild('woodStart', { static: true }) woodStart!: ElementRef;
  @ViewChild('woodEnd', { static: true }) woodEnd!: ElementRef;
  @ViewChild('foodStart', { static: true }) foodStart!: ElementRef;
  @ViewChild('foodEnd', { static: true }) foodEnd!: ElementRef;
  @ViewChild('goldStart', { static: true }) goldStart!: ElementRef;
  @ViewChild('goldEnd', { static: true }) goldEnd!: ElementRef;
  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ aoeStore: AppState }>
  ) {
    this.myForm = this.fb.group({
      age: ['all'],
      woodControl: [false],
      foodControl: [false],
      goldControl: [false],
      wood: new FormControl({ value: [0, 200], disabled: true }),
      food: new FormControl({ value: [0, 200], disabled: true }),
      gold: new FormControl({ value: [0, 200], disabled: true }),
    });
  }

  ngOnInit() {
    this.myForm.get('age')?.valueChanges.subscribe(() => {
      this.store.dispatch(
        setFilter({
          payload: {
            filterType: 'age',
            value: this.myForm.get('age')?.value,
          },
        })
      );
    });
    this.trackCheckboxes();
    this.trackRangeSliders();
  }

  trackCheckboxes() {
    this.myForm.get('woodControl')?.valueChanges.subscribe((value) => {
      value
        ? this.myForm.get('wood')?.enable()
        : this.myForm.get('wood')?.disable();
      this.store.dispatch(
        setFilter({
          payload: {
            filterType: 'wood',
            value: value ? this.myForm.get('wood')?.value : undefined,
          },
        })
      );
    });

    this.myForm.get('foodControl')?.valueChanges.subscribe((value) => {
      value
        ? this.myForm.get('food')?.enable()
        : this.myForm.get('food')?.disable();
      this.store.dispatch(
        setFilter({
          payload: {
            filterType: 'food',
            value: value ? this.myForm.get('food')?.value : undefined,
          },
        })
      );
    });

    this.myForm.get('goldControl')?.valueChanges.subscribe((value) => {
      value
        ? this.myForm.get('gold')?.enable()
        : this.myForm.get('gold')?.disable();
      this.store.dispatch(
        setFilter({
          payload: {
            filterType: 'gold',
            value: value ? this.myForm.get('gold')?.value : undefined,
          },
        })
      );
    });
  }

  trackRangeSliders() {
    this.myForm.get('wood')?.valueChanges.subscribe(() => {
      this.myForm
        .get('wood')
        ?.setValue(
          [
            Number(this.woodStart.nativeElement.value),
            Number(this.woodEnd.nativeElement.value),
          ],
          { emitEvent: false }
        );
      this.store.dispatch(
        setFilter({
          payload: {
            filterType: 'wood',
            value: this.myForm.get('wood')?.value,
          },
        })
      );
    });

    this.myForm.get('food')?.valueChanges.subscribe(() => {
      this.myForm
        .get('food')
        ?.setValue(
          [
            Number(this.foodStart.nativeElement.value),
            Number(this.foodEnd.nativeElement.value),
          ],
          { emitEvent: false }
        );

      this.store.dispatch(
        setFilter({
          payload: {
            filterType: 'food',
            value: this.myForm.get('food')?.value,
          },
        })
      );
    });

    this.myForm.get('gold')?.valueChanges.subscribe(() => {
      this.myForm
        .get('gold')
        ?.setValue(
          [
            Number(this.goldStart.nativeElement.value),
            Number(this.goldEnd.nativeElement.value),
          ],
          { emitEvent: false }
        );
      this.store.dispatch(
        setFilter({
          payload: {
            filterType: 'gold',
            value: this.myForm.get('gold')?.value,
          },
        })
      );
    });
  }
}
