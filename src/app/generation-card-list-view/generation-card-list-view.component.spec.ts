import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationCardListViewComponent } from './generation-card-list-view.component';

describe('GenerationCardListViewComponent', () => {
  let component: GenerationCardListViewComponent;
  let fixture: ComponentFixture<GenerationCardListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationCardListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationCardListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
