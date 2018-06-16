import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedContentComponent } from './translated-content.component';

describe('TranslatedContentComponent', () => {
  let component: TranslatedContentComponent;
  let fixture: ComponentFixture<TranslatedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
