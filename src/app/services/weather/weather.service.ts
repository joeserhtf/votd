import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesData } from 'src/app/entity/saved_city.entity';
import { WeatherData } from 'src/app/entity/weather.entity';
import { WeatherRepository } from '../../data/repository/weather/weather.repository'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private WeatherRepository: WeatherRepository) { }

  async fetchCity(name: string, lat?: number, lng?: number): Promise<CitiesData> {
    return await this.WeatherRepository.fetchCity(name, lat, lng);
  }
}
