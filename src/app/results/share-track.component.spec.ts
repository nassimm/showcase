import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTrackComponent } from './share-track.component';

describe('ShareTrackComponent', () => {
  let component: ShareTrackComponent;
  let fixture: ComponentFixture<ShareTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
