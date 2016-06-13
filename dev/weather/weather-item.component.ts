import { Component } from 'angular2/core';

@Component({
  selector: 'weather-item',
  template: `
<article class="weather-element">
    <div class="col-1">
        <h3>Cityname</h3>
        <p class="info">CLOUDS</p>
    </div>
    <div class="col-2">
        <span class="temperature">32°C</span>
    </div>
</article>
`,
  styleUrls: [
    'src/css/weather-item.css'
  ]
})

export class WeatherItemComponent {

}
