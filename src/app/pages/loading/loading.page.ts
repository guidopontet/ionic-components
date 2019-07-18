import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  private loading: HTMLIonLoadingElement;

  constructor(
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
    this.presentLoading('Wait please...');
  }

  async presentLoading( message: string ) {
    this.loading = await this.loadingController.create({
      message,
      // duration: 2000
    });

    this.loading.present();
  }

}
