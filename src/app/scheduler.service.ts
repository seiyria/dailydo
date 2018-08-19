import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

interface Schedule {
  name: string;
  dayHour: number;
}

interface Occurrence {

}

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  
  public schedules: Schedule[] = [];
  public occurrences: Occurrence[] = [];

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const schedules = await this.storage.get('schedules');
    this.schedules = schedules || [];

    const occurrences = await this.storage.get('occurrences');
    this.occurrences = occurrences || [];
  }
}
