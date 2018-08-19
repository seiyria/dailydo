import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ModalController } from '@ionic/angular';

import { SchedulerService } from '../scheduler.service';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
})
export class SchedulesPage implements OnInit {

  constructor(
    public scheduler: SchedulerService,
    private localNotifications: LocalNotifications,
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

    console.log('res', res);
  }

}
