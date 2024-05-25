import { Component, input } from '@angular/core';
import { Idd } from '../../models/county.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country-code',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './country-code.component.html',
  styleUrl: './country-code.component.scss'
})
export class CountryCodeComponent {
  countryCode = input<Idd>();
  showAll = false;

  getFirstSuffix() {
    const countryCode = this.countryCode();
    return countryCode && countryCode.suffixes
      ? countryCode.suffixes[0]
      : undefined;
  }

  shouldDisplayShowButton() {
    const countryCode = this.countryCode();
    return countryCode && countryCode.suffixes && countryCode.suffixes.length > 1;
  }

}
