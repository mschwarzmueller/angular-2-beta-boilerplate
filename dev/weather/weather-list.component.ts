import {Component} from "angular2/core";

import {WeatherItemComponent} from './weather-item.component';

@Component({
  selector: 'weather-list',
  template: `
<section class="weather-list">
  <weather-item></weather-item>
</section>
`,
  directives: [
    WeatherItemComponent
  ]
})

export class WeatherListComponent {

}
