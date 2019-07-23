import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent {
  public items = Array(40);

  constructor(
    private popoverController: PopoverController
  ) {}

  onClick(i: number) {
    console.log(i);
    this.popoverController.dismiss({
      item: i
    });
  }
}
