import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAlternateNamesComponent } from './country-alternate-names.component';

describe('CountryAlternateNamesComponent', () => {
  let component: CountryAlternateNamesComponent;
  let fixture: ComponentFixture<CountryAlternateNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryAlternateNamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryAlternateNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
