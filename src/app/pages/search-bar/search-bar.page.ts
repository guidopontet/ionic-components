import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  public albums;
  public textSearch = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.albums = this.dataService.getAlbums();
  }

  onSearchChange(event) {
    this.textSearch = event.detail.value;
  }

}
