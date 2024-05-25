import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNativeNameComponent } from './country-native-name.component';

describe('CountryNativeNameComponent', () => {
  let component: CountryNativeNameComponent;
  let fixture: ComponentFixture<CountryNativeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryNativeNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryNativeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
