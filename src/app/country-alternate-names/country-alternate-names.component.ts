import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-alternate-names',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-alternate-names.component.html',
  styleUrl: './country-alternate-names.component.scss'
})
export class CountryAlternateNamesComponent {
  @Input() alternateNames!: string[];
  showAll = false;
}
