import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Title } from '../models/title.model';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  private api = 'https://localhost:44399/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAllTitles(): Observable<Title[]> {
    return this.httpClient.get<Title[]>(this.api + '/titles/');
  }

  getByTitle(title: string): Observable<Title[]> {
    return this.httpClient.get<Title[]>(this.api + '/titles/' + title);
  }

  getDetailsById(id: number): Observable<Title> {
    return this.httpClient.get<Title>(this.api + '/titles/GetTitleById/' + id);
  }
}
