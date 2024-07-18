import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocioeconomicActivitiesListComponent } from './socioeconomic-activities-list/socioeconomic-activities-list.component';
import { SocioeconomicActivitiesDetailComponent } from './socioeconomic-activities-detail/socioeconomic-activities-detail.component';

const routes: Routes = [
  { path: '', component: SocioeconomicActivitiesListComponent },
  { path: ':id', component: SocioeconomicActivitiesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocioeconomicActivitiesRoutingModule { }