import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  Country,
  Currencies,
  Languages,
  NativeName,
} from '../../models/county.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { CountryAlternateNamesComponent } from '../country-alternate-names/country-alternate-names.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country-view',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatTooltip,
    CountryAlternateNamesComponent,
    MatButtonModule
  ],
  templateUrl: './country-view.component.html',
  styleUrl: './country-view.component.scss',
})
export class CountryViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public country: Country, public dialogRef: MatDialogRef<CountryViewComponent>) {}
  keys = Object.keys;

  getCurrencies(currencies?: Currencies) {
    if (!currencies) {
      return [];
    }
    let currenciesArray: any[] = [];
    Object.keys(currencies).map((key) => {
      const name = currencies[key].name;
      const symbol = currencies[key].symbol;
      currenciesArray.push({
        name,
        symbol,
      });
    });
    return currenciesArray;
  }

  getLanguages(languages?: Languages) {
    if (!languages) {
      return [];
    }
    let languagesArray: any[] = [];
    Object.keys(languages).map((key) => {
      languagesArray.push(languages[key]);
    });
    return languagesArray.join(' , ');
  }

  getNativeName(nativeName?: NativeName) {
    if (!nativeName) {
      return [];
    }
    let nativeNameArray: any[] = [];
    Object.keys(nativeName).map((key) => {
      const name = nativeName[key].official;
      nativeNameArray.push(name);
    });
    return nativeNameArray.join(' , ');
  }
}
