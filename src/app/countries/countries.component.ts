import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Country } from '../../models/county.model';
import { CountryService } from '../../services/country.service';
import { PipesModule } from '../../pipes/pipes.module';
import { CountryCodeComponent } from '../country-code/country-code.component';
import { CountryNativeNameComponent } from '../country-native-name/country-native-name.component';
import { CountryAlternateNamesComponent } from '../country-alternate-names/country-alternate-names.component';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Subscription, debounceTime, finalize } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CountryViewComponent } from '../country-view/country-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-countries',
  standalone: true,
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    PipesModule,
    CountryCodeComponent,
    CountryNativeNameComponent,
    CountryAlternateNamesComponent,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
})
export class CountriesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'country',
    'cca2',
    'cca3',
    'nativeName',
    'alternateNames',
    'code',
  ];
  countries = new MatTableDataSource<Country>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pageSize = 20;
  pageSizeOptions: number[] = [20, 50, 100];

  private countryService = inject(CountryService);
  private subscription = new Subscription();
  loadingCountries = false;

  searchControl = new FormControl<string>('');

  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.getCountries();
    this.onSearchChanged();
  }

  ngAfterViewInit() {
    this.countries.paginator = this.paginator;
    this.countries.sort = this.sort;
  }

  private onSearchChanged() {
    this.searchControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe((value) => {
      this.subscription.unsubscribe();
      if(!value) {
        this.getCountries();
      } else {
        this.seachCountries(value);
      }
    });
  }

  private seachCountries(value: string): void {
    this.loadingCountries = true;
    this.subscription = this.countryService.getCountry(value)
    .pipe(finalize(() => {
      this.loadingCountries = false;
    }))
    .subscribe((countries) => {
      this.countries.data = countries;
    });
  }

  private getCountries(): void {
    this.loadingCountries = true;
    this.subscription = this.countryService.getCountry()
    .pipe(finalize(() => {
      this.loadingCountries = false;
    }))
    .subscribe((countries) => {
      const orderedCountries = this.orderCountryByOfficailName(countries, 'asc');
      this.countries.data = orderedCountries;
    });
  }

  private orderCountryByOfficailName(countries: Country[], order: string): Country[] {
    return countries.sort((a, b) => {
      const nameA = a.name.official;
      const nameB = b.name.official;
      if (order === 'asc') {
        return (nameA < nameB? -1 : 1);
      }
      return (nameA > nameB? -1 : 1);
    });
  }

  sortData(sort: Sort): void {
    this.orderCountryByOfficailName(this.countries.data, sort.direction);
  }

  openCountryDialog(country: Country): void {
    this.dialog.open(CountryViewComponent, {
      data: country,
      panelClass: 'country-dialog',
    });
  }

}
