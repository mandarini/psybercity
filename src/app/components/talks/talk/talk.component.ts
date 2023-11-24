import { Component, OnInit, Input } from '@angular/core';
import { Talk } from '../../../objects/merged-talk';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss'],
})
export class TalkComponent implements OnInit {
  @Input() talk: Talk = {} as Talk;
  @Input() id_talk = 0;

  constructor() {}

  ngOnInit() {}
}
