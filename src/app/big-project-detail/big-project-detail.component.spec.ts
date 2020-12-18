import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigProjectDetailComponent } from './big-project-detail.component';

describe('BigProjectDetailComponent', () => {
  let component: BigProjectDetailComponent;
  let fixture: ComponentFixture<BigProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
