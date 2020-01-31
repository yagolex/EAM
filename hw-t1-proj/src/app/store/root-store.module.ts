import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesStoreModule } from './courses-store/courses-store.module';
import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { rootReducers } from './root-reducers';
import { CoursesEffects } from './courses-store/courses-effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesStoreModule,
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot([CoursesEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
    // StoreDevtoolsModule.instrumentStore()
  ]
})
export class RootStoreModule {}
