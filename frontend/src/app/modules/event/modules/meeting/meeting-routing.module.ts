import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingDetailComponent } from './meeting-detail/meeting-detail.component';

const routes: Routes = [
  { path: '', component: MeetingListComponent },
  { path: ':id', component: MeetingDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }