import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfrastructureListComponent } from './infrastructure-list/infrastructure-list.component';
import { InfrastructureDetailComponent } from './infrastructure-detail/infrastructure-detail.component';

const routes: Routes = [
  { path: '', component: InfrastructureListComponent },
  { path: ':id', component: InfrastructureDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureRoutingModule { }