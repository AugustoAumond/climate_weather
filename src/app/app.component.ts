import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

import { cityProps, DatasProps, datasUtilizableProps } from './components/interfaces/DatasProps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainContainerComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'weather';
  datas?: DatasProps;
  currentData?: DatasProps;
  city: cityProps = {city: '', state: ''}
  utilizableDatas?:  datasUtilizableProps;

  ngOnInit(): void {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=riodejaneiro&limit=5&appid=45f8d6a48ac2279c8954243037bb47b8`)
    .then((e) => {
      this.city = {city: e.data[0].name, state: e.data[0].state};

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-22.9110137&lon=-43.2093727&lang=pt_br&appid=45f8d6a48ac2279c8954243037bb47b8&units=metric`)
      .then((element) => {
        this.datas = element.data

        this.utilizableDatas = {
          weather: element.data.weather[0].description, 
          main: element.data.weather[0].main,
          img: `https://openweathermap.org/img/wn/${element.data.weather[0].icon}@2x.png`,
          temp: Math.round(element.data.main.temp),
          feeks_like:  Math.round(element.data.main.feels_like),
          temp_max:  Math.round(element.data.main.temp_max),
          temp_min: Math.round(element.data.main.temp_min),
          wind: Math.round(element.data.wind.speed),
          humidity: element.data.main.humidity
        }

        console.log(this.utilizableDatas)
      })
    })
  }

  datasToChildren?: DatasProps;

  getCoords(event: string){
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${event}&limit=5&appid=45f8d6a48ac2279c8954243037bb47b8`)
    .then((e) => {
      this.datas = e.data[0]
      this.city = {city: event, state: e.data[0].state};
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.datas?.lat}&lon=${this.datas?.lon}&lang=pt_br&appid=45f8d6a48ac2279c8954243037bb47b8&units=metric`)
      .then((element) => {
        this.datas = element.data

        this.utilizableDatas = {
          weather: element.data.weather[0].description, 
          main: element.data.weather[0].main,
          img: `https://openweathermap.org/img/wn/${element.data.weather[0].icon}@2x.png`,
          temp: Math.round(element.data.main.temp),
          feeks_like:  Math.round(element.data.main.feels_like),
          temp_max: Math.round(element.data.main.temp_max),
          temp_min: Math.round(element.data.main.temp_min),
          wind: Math.round(element.data.wind.speed),
          humidity: element.data.main.humidity
        }

        console.log(element.data)
      })
    })
  }
}
