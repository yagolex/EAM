import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoursesReducers } from './courses-reducers';
import { CoursesEffects } from './courses-effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('COURSES', CoursesReducers),
    EffectsModule.forFeature([CoursesEffects])
  ],
  providers: [CoursesEffects]
})
export class CoursesStoreModule {}
