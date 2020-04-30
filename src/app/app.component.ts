import { Component, OnInit, Input } from '@angular/core';
import { TitlesService } from './shared/titles.service';
import { Title } from './models/title.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titles: Title[];

  constructor(private titlesService: TitlesService) { }

  ngOnInit() {
    this.titlesService.getAllTitles().subscribe((res: any[]) => {
      this.titles = res;
    });
  }

  onSearch($event) {
    this.titlesService.getByTitle($event).subscribe((res: any[]) => {
      this.titles = res;
    });
  }
}
