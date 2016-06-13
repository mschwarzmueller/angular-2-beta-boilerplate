import { Component } from 'angular2/core';
import { WeatherListComponent } from "./weather/weather-list.component";

@Component({
    selector: 'my-app',
    template: `
<header>
  <h1>Angular 2 Weather</h1>
</header>
<weather-list></weather-list>
`,
    directives: [
      WeatherListComponent
    ]
})

export class AppComponent {

}
