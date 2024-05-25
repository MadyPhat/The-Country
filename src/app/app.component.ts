import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesComponent } from "./countries/countries.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CountriesComponent]
})
export class AppComponent {
  title = 'The-Country';
}
