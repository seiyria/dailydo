import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'app-occurrences',
  templateUrl: './occurrences.page.html',
  styleUrls: ['./occurrences.page.scss'],
})
export class OccurrencesPage implements OnInit {

  constructor(public scheduler: SchedulerService) { }

  ngOnInit() {
  }

}
