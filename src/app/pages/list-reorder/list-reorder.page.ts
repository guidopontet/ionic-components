import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  superheroes = ['batman', 'flash', 'superman', 'aquaman', 'wonderwoman'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    console.log(event);
    event.detail.complete();
  }

}
