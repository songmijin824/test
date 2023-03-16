import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPannelComponent } from './news-pannel.component';

describe('NewsPannelComponent', () => {
  let component: NewsPannelComponent;
  let fixture: ComponentFixture<NewsPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
