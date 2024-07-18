import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityDevelopmentListComponent } from './community-development-list/community-development-list.component';
import { CommunityDevelopmentDetailComponent } from './community-development-detail/community-development-detail.component';

const routes: Routes = [
  { path: '', component: CommunityDevelopmentListComponent },
  { path: ':id', component: CommunityDevelopmentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityDevelopmentRoutingModule { }