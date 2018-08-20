import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['./schedule-modal.component.scss']
})
export class ScheduleModalComponent implements OnInit {

  public scheduleForm: FormGroup;

  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      name:       [null,    Validators.required],
      recurrence: [{ value: 'day', disabled: true }, Validators.required],
      time:       [null,    Validators.required]
    });
  }

  save() {
    const val = this.scheduleForm.value;
    if(!val.recurrence) val.recurrence = 'day';

    console.log(val);

    this.modalCtrl.dismiss(val);
  }

}
