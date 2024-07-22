import { Component, Input, OnInit} from '@angular/core';
import {datasUtilizableProps } from '../interfaces/DatasProps';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faSun, faTemperatureEmpty, faTemperatureHigh, faTemperatureLow, faWind, faDroplet, faCloudRain, faCloudSun, faThunderstorm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit {
  @Input() utilizableDatas?: datasUtilizableProps;
  @Input() city?: {city: string, state: string};

  Sun = faSun;
  Cloud = faCloudSun;
  Rain = faCloudRain;
  Thunderstorm = faThunderstorm

  Temperature = faTemperatureEmpty
  Hight = faTemperatureHigh
  Low = faTemperatureLow
  Wind = faWind
  Drop = faDroplet

  ngOnInit(): void {
      
  }
}
