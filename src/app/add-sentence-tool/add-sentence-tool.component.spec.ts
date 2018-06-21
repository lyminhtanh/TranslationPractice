import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSentenceToolComponent } from './add-sentence-tool.component';

describe('AddSentenceToolComponent', () => {
  let component: AddSentenceToolComponent;
  let fixture: ComponentFixture<AddSentenceToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSentenceToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSentenceToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
