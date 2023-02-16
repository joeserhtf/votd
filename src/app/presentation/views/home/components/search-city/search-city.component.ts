import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entity/tracks.entity';
import { SavedCitiesService } from 'src/app/services/saved_cities/saved-cities.service';
import { TracksService } from 'src/app/services/tracks/tracks.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  cityForm = {
    nome: '',
    lat: undefined,
    lng: undefined,
    temp: 30,
    genrer: ''
  }

  constructor(private musicService: TracksService, public savedService: SavedCitiesService, private WeatherService: WeatherService) { }

  ngOnInit(): void {
  }

  saveNew() {
    this.savedService.saveCity(
      {
        city: this.savedService.currentCity.city,
        state: this.savedService.currentCity.state,
        date: formatDate(Date.now(), 'dd/MM/yyyy', 'en-US'),
        temperature: this.savedService.currentCity.temperature,
        genrer: this.savedService.currentCity.genrer,
        tracks: this.savedService.currentCity.tracks
      }
    );
  }

  async searchCity() {
    let res = await this.WeatherService.fetchCity(this.cityForm.nome, this.cityForm.lat, this.cityForm.lng);
    console.log(res);
    this.savedService.currentCity = res;
    this.fetchMusics(this.savedService.currentCity.temperature);
  }

  fetchMusics(temp: number) {
    let genrer = "";

    if (temp > 32) {
      genrer = "Rock";
    } else if (temp > 24) {
      genrer = "Pop";
    } else if (temp > 16) {
      genrer = "Classica";
    } else {
      genrer = "Lofi";
    }

    this.savedService.currentCity.genrer = genrer;

    this.musicService.fetchMusics(genrer).subscribe((tracks) => {
      this.savedService.currentCity.tracks = tracks.tracks.items;
    });
  }

}

