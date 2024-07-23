import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureEmpty, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { datasUtilizableProps } from '../../interfaces/DatasProps';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
  Temperature = faTemperatureEmpty
  Hight = faTemperatureHigh
  Low = faTemperatureLow
  Wind = faWind
  Drop = faDroplet

  @Input() utilizableDatas?: datasUtilizableProps;
}
