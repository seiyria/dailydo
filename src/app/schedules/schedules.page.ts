import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SchedulerService } from '../scheduler.service';
import { ScheduleModalComponent } from './schedule-modal/schedule-modal.component';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
})
export class SchedulesPage implements OnInit {

  constructor(
    public scheduler: SchedulerService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async newSchedule() {
    const modal = await this.modalController.create({
      component: ScheduleModalComponent
    });

    await modal.present();

    const res = await modal.onDidDismiss();

    if(!res || !res.data) return;
    const { name, recurrence, time } = res.data;

    this.scheduler.addSchedule({ name, recurrence, time });
  }

}
