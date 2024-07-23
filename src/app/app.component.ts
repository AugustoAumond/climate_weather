import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { MainContainerComponent } from './components/main-container/main-container.component';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import axios from 'axios';

import { cityProps, DatasProps, datasUtilizableProps } from './components/interfaces/DatasProps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainContainerComponent, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'weather';
  datas?: DatasProps;
  currentData?: DatasProps;
  city: cityProps = {city: '', state: ''}
  utilizableDatas?:  datasUtilizableProps;

  httpClient = inject(HttpClient)

  ngOnInit(): void {
    this.httpClient.get(`http://api.openweathermap.org/geo/1.0/direct?q=riodejaneiro&limit=5&appid=45f8d6a48ac2279c8954243037bb47b8`)
    .subscribe({
      next: (data: any) => {
        this.city = {city: data[0].name, state: data[0].state};

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-22.9110137&lon=-43.2093727&lang=pt_br&appid=45f8d6a48ac2279c8954243037bb47b8&units=metric`).
        then ((element)=>{
            this.utilizableDatas = {
            weather: element.data.weather[0].description, 
            main: element.data.weather[0].main,
            temp: Math.round(element.data.main.temp),
            feeks_like:  Math.round(element.data.main.feels_like),
            temp_max:  Math.round(element.data.main.temp_max),
            temp_min: Math.round(element.data.main.temp_min),
            wind: Math.round(element.data.wind.speed),
            humidity: element.data.main.humidity
        }})
      }
    })
  }

  datasToChildren?: DatasProps;

  getCoords(event: string){
    this.httpClient.get(`http://api.openweathermap.org/geo/1.0/direct?q=${event}&limit=5&appid=45f8d6a48ac2279c8954243037bb47b8&lang=pt_br`)
    .subscribe({
      next: (e: any) => {
        this.datas = e[0]
        this.city = {city: e[0].name, state: e[0].state};
      }
    })
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.datas?.lat}&lon=${this.datas?.lon}&lang=pt_br&appid=45f8d6a48ac2279c8954243037bb47b8&units=metric`)
    .then((element) => {
      this.datas = element.data
      this.utilizableDatas = {
        weather: element.data.weather[0].description, 
        main: element.data.weather[0].main,
        temp: Math.round(element.data.main.temp),
        feeks_like:  Math.round(element.data.main.feels_like),
        temp_max: Math.round(element.data.main.temp_max),
        temp_min: Math.round(element.data.main.temp_min),
        wind: Math.round(element.data.wind.speed),
        humidity: element.data.main.humidity
      }
    })    
  }
}


