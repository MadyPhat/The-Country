import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryViewComponent } from './country-view.component';

describe('CountryViewComponent', () => {
  let component: CountryViewComponent;
  let fixture: ComponentFixture<CountryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
