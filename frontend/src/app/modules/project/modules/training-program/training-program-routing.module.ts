import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingProgramListComponent } from './training-program-list/training-program-list.component';
import { TrainingProgramDetailComponent } from './training-program-detail/training-program-detail.component';

const routes: Routes = [
  { path: '', component: TrainingProgramListComponent },
  { path: ':id', component: TrainingProgramDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingProgramRoutingModule { }