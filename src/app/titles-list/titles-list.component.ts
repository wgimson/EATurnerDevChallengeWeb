import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../models/title.model';

@Component({
  selector: 'app-titles-list',
  templateUrl: './titles-list.component.html',
  styleUrls: ['./titles-list.component.css']
})
export class TitlesListComponent implements OnInit {

  @Input() titles: Title[];

  selectedTitleId: number;
  display = false;

  constructor() { }

  ngOnInit() {
  }

  onClickDetails($event, id) {
    this.selectedTitleId = id;
    this.display = true;
  }

}
