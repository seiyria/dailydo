import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { OccurrencesPage } from '../occurrences/occurrences.page';
import { SchedulesPage } from '../schedules/schedules.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedules',
        outlet: 'schedules',
        component: SchedulesPage
      },
      {
        path: 'occurrences',
        outlet: 'occurrences',
        component: OccurrencesPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(schedules:schedules)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
