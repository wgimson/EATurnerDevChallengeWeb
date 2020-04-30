import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitlesComponent } from './search-titles.component';

describe('SearchTitlesComponent', () => {
  let component: SearchTitlesComponent;
  let fixture: ComponentFixture<SearchTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
