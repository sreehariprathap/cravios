import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCategoriesComponent } from './quick-categories.component';

describe('QuickCategoriesComponent', () => {
  let component: QuickCategoriesComponent;
  let fixture: ComponentFixture<QuickCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QuickCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
