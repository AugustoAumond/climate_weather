import { Component, Input, OnInit} from '@angular/core';
import {datasUtilizableProps } from '../interfaces/DatasProps';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCloudRain, faCloudSun, faSun, faThunderstorm } from '@fortawesome/free-solid-svg-icons';
import { InfosComponent } from "./infos/infos.component";
import { TodayWeatherComponent } from "./today-weather/today-weather.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [FontAwesomeModule, InfosComponent, TodayWeatherComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit {
  @Input() utilizableDatas?: datasUtilizableProps;
  @Input() city?: {city: string, state: string};

  ngOnInit(): void {
      
  }
}
