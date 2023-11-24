import { Component, OnInit } from '@angular/core';
import talks from '../../../assets/merged-talks.json';
import { Talk } from '../../objects/merged-talk';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss'],
})
export class TalksComponent implements OnInit {
  all_talks: Talk[] = talks;

  constructor() {}

  ngOnInit() {
    this.all_talks = this.all_talks.sort((a, b) => {
      return (a.timestamp ?? 0) > (b.timestamp ?? 0) ? -1 : 1;
    });
  }
}
