import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  public segmentValue = '';
  public superheroes: Observable<any>;
  public publisher = '';
  @ViewChild(IonSegment) segment: IonSegment;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.segment.value = 'all';
    this.superheroes = this.dataService.getSuperheroes();
  }

  segmentChanged(event) {
    this.segmentValue = event.detail.value;
    if (this.segmentValue === 'all') {
      return this.publisher = '';
    }

    this.publisher = this.segmentValue;
  }

}
