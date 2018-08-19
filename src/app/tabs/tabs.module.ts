import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { SchedulesPageModule } from '../schedules/schedules.module';
import { OccurrencesPageModule } from '../occurrences/occurrences.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SchedulesPageModule,
    OccurrencesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
