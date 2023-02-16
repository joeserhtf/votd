import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { CityLatLng } from 'src/app/entity/city.entity';
import { CitiesData } from 'src/app/entity/saved_city.entity';
import { WeatherData } from 'src/app/entity/weather.entity';
import { formatDate } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class WeatherRepository {

    private APIWEATHER = "https://api.openweathermap.org/data/2.5/weather";

    private APICITY = "http://api.openweathermap.org/geo/1.0/direct";

    private APIREVERSE = "http://api.openweathermap.org/geo/1.0/reverse";

    private APPID = "82a03097b134dac269a63a7c437c84d9";

    constructor(private http: HttpClient) { }

    fetchWeatherByLatLng(lat: number, lng: number): Observable<WeatherData> {
        return this.http.get<WeatherData>(`${this.APIWEATHER}?lat=${lat}&lon=${lng}&appid=${this.APPID}&units=metric`);
    }

    async fetchCity(name: string, lat?: number, lng?: number): Promise<CitiesData> {
        let data;
        if (lat && lng) {
            data = this.http.get<CityLatLng[]>(`${this.APIREVERSE}?lat=${lat}&lon=${lng}&limit=5&appid=${this.APPID}`);
        } else {
            data = this.http.get<CityLatLng[]>(`${this.APICITY}?q=${name}&limit=5&appid=${this.APPID}`);
        }
        let cities = await lastValueFrom(data);

        lat = 0;
        lng = 0;
        console.log(cities);
        if (cities.length > 0) {
            lat = cities[0].lat;
            lng = cities[0].lon;
        }

        console.log(lat, lng)

        const weather = this.fetchWeatherByLatLng(lat, lng);
        let weatherResult = await lastValueFrom(weather);
        console.log(weatherResult);
        return {
            city: cities[0].name,
            state: cities[0].state,
            date: formatDate(Date.now(), 'dd/MM/yyyy', 'en-US'),
            genrer: '',
            temperature: weatherResult.main.temp,
            tracks: []
        };
    }
}
