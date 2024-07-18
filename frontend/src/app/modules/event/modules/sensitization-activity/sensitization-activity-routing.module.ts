import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensitizationActivityListComponent } from './sensitization-activity-list/sensitization-activity-list.component';
import { SensitizationActivityDetailComponent } from './sensitization-activity-detail/sensitization-activity-detail.component';

const routes: Routes = [
  { path: '', component: SensitizationActivityListComponent },
  { path: ':id', component: SensitizationActivityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensitizationActivityRoutingModule { }