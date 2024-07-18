import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerWorkListComponent } from './volunteer-work-list/volunteer-work-list.component';
import { VolunteerWorkDetailComponent } from './volunteer-work-detail/volunteer-work-detail.component';

const routes: Routes = [
  { path: '', component: VolunteerWorkListComponent },
  { path: ':id', component: VolunteerWorkDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerWorkRoutingModule { }