import { Component, Input } from '@angular/core';
import { datasUtilizableProps } from '../../interfaces/DatasProps';
import { faCloudRain, faCloudSun, faSun, faThunderstorm } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-today-weather',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './today-weather.component.html',
  styleUrl: './today-weather.component.css'
})
export class TodayWeatherComponent {
  Sun = faSun;
  Cloud = faCloudSun;
  Rain = faCloudRain;
  Thunderstorm = faThunderstorm

  @Input() utilizableDatas?: datasUtilizableProps;

}
