import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TitlesService } from '../shared/titles.service';



@Component({
  selector: 'app-search-titles',
  templateUrl: './search-titles.component.html',
  styleUrls: ['./search-titles.component.css']
})
export class SearchTitlesComponent implements OnInit {


  @Output() searchTitleEvent = new EventEmitter<string>();

  searchTitle: string;

  constructor(private titlesService: TitlesService) { }

  ngOnInit() {
  }

  onSearchClick($event) {
    console.log(this.searchTitle);
    this.searchTitleEvent.emit(this.searchTitle);
  }

}
