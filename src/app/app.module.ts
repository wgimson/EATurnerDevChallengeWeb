import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
// import {DialogModule} from 'primeng/dialog';
// import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { SearchTitlesComponent } from './search-titles/search-titles.component';
import { TitlesListComponent } from './titles-list/titles-list.component';
import { TitlesService } from './shared/titles.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTitlesComponent,
    TitlesListComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    // DialogModule
    // TableModule
  ],
  providers: [TitlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
