import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name;
  @Input() country;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  closeWithoutArguments() {
    this.modalController.dismiss();
  }

  closeWithArguments() {
    this.modalController.dismiss({
      name: 'Software del mañana',
      country: 'Interestelar'
    });
  }

}
