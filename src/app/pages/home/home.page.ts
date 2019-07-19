import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuSet: Observable<Componente[]>;

  constructor(
    private menuController: MenuController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.menuSet = this.dataService.getMenu();
  }

  toggleMenu() {
    this.menuController.toggle();
  }
}
