import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { TrainingComponent } from './components/training/training.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/recently-added', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
