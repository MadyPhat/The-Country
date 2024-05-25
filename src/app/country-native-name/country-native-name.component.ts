import { Component, Input, input } from '@angular/core';
import { NativeName } from '../../models/county.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-native-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-native-name.component.html',
  styleUrl: './country-native-name.component.scss'
})
export class CountryNativeNameComponent {
  @Input() nativeName!: NativeName;
  showAll = false;

  keys = Object.keys;

  shouldDisplayShowButton() {
    if(!this.nativeName) return;
    return Object.keys(this.nativeName).length > 1;
  }

  getFirstNativeName() {
    const key = this.keys(this.nativeName)[0];
    return `${key} : ${this.nativeName[key].official || this.nativeName[key].common}`;
  }
}
