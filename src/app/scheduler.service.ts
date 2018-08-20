import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

interface Schedule {
  id?: number;
  name: string;
  recurrence: 'day' | 'week' | 'month' | 'year';
  time: string;
}

interface Occurrence {

}

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  
  public schedules: Schedule[] = [];
  public occurrences: Occurrence[] = [];

  constructor(
    private storage: Storage,
    private localNotifications: LocalNotifications
  ) { 
    this.init();
  }

  private async init() {
    const schedules = await this.storage.get('schedules');
    this.schedules = schedules || [];

    const occurrences = await this.storage.get('occurrences');
    this.occurrences = occurrences || [];
  }

  public addSchedule(sch: Schedule) {

    const previousSchedule = this.schedules[this.schedules.length - 1];
    const newId = previousSchedule ? previousSchedule.id + 1 : 1;

    sch.id = newId;

    this.schedules.push(sch);
    this.storage.set('schedules', this.schedules);

    console.log(sch, new Date(sch.time))

    const messageOpt: any = {
      id: sch.id,
      text: `Reminder: ${sch.name}`,
      icon: 'https://seiyria.com/gameicons-font/svg/syringe-2.svg',
      foreground: true,
      
      trigger: {
        every: 'day',
        at: {

        }
      },

      actions: [
        { id: 1, title: 'Done' },
        { id: 2, title: 'Snooze' }
      ]
    };

    this.localNotifications.schedule(messageOpt);
  }
}
