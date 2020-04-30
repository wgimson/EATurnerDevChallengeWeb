import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../models/title.model';
import { TitlesService } from '../shared/titles.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() titleId: number;

  titleDetails: Title;

  constructor(private titlesService: TitlesService) { }

  ngOnInit() {
    this.titlesService.getDetailsById(this.titleId).subscribe((res: any) => {
      this.titleDetails = res;
    });
  }

}
