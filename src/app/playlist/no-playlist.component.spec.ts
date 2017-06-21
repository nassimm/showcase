import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPlaylistComponent } from './no-playlist.component';

describe('NoPlaylistComponent', () => {
  let component: NoPlaylistComponent;
  let fixture: ComponentFixture<NoPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
