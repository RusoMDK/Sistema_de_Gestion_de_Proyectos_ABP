import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../layout/base/welcome/welcome.component';
import { AuthGuard } from '../core/_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'projects',
        children: [
          { path: '', loadChildren: () => import('../modules/project/project.module').then(m => m.ProjectModule) },
          { path: 'infrastructure', loadChildren: () => import('../modules/project/modules/infrastructure/infrastructure.module').then(m => m.InfrastructureModule) },
          { path: 'volunteer-work', loadChildren: () => import('../modules/project/modules/volunteer-work/volunteer-work.module').then(m => m.VolunteerWorkModule) },
          { path: 'training-program', loadChildren: () => import('../modules/project/modules/training-program/training-program.module').then(m => m.TrainingProgramModule) },
          { path: 'socioeconomic-activities', loadChildren: () => import('../modules/project/modules/socioeconomic-activities/socioeconomic-activities.module').then(m => m.SocioeconomicActivitiesModule) },
          { path: 'tasks', loadChildren: () => import('../modules/task/task.module').then(m => m.TaskModule) },
          { path: 'activities', loadChildren: () => import('../modules/activity/activity.module').then(m => m.ActivityModule) },
          { path: 'materials', loadChildren: () => import('../modules/material/material.module').then(m => m.MaterialModule) }
        ]
      },
      {
        path: 'events',
        children: [
          { path: '', loadChildren: () => import('../modules/event/event.module').then(m => m.EventModule) },
          { path: 'community-development', loadChildren: () => import('../modules/event/modules/community-development/community-development.module').then(m => m.CommunityDevelopmentModule) },
          { path: 'meetings', loadChildren: () => import('../modules/event/modules/meeting/meeting.module').then(m => m.MeetingModule) },
          { path: 'sensitization-activities', loadChildren: () => import('../modules/event/modules/sensitization-activity/sensitization-activity.module').then(m => m.SensitizationActivityModule) }
        ]
      },
      { path: 'calendar', loadChildren: () => import('../modules/calendar/calendar.module').then(m => m.CalendarModule) },
      { path: 'reports', loadChildren: () => import('../modules/report/report.module').then(m => m.ReportModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }