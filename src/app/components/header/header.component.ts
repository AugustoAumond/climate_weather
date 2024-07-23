import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  city: string = '';

  faCloud = faCloud;

  @Output() citySearch: EventEmitter<any> = new EventEmitter;

  getCoords(){
    if  (this.city === '') return
    
    this.citySearch.emit(this.city);

    this.city = '';
  }


}

