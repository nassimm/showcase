import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostplayedComponent } from './mostplayed.component';

describe('MostplayedComponent', () => {
  let component: MostplayedComponent;
  let fixture: ComponentFixture<MostplayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostplayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
