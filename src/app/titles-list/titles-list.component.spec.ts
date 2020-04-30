import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesListComponent } from './titles-list.component';

describe('TitlesListComponent', () => {
  let component: TitlesListComponent;
  let fixture: ComponentFixture<TitlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
