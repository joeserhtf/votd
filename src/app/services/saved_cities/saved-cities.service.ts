import { Injectable } from '@angular/core';
import { CitiesData } from 'src/app/entity/saved_city.entity';

@Injectable({
  providedIn: 'root'
})
export class SavedCitiesService {

  private savedStorage: Storage;
  private key = "savedCities";

  savedCities: CitiesData[] = [];

  currentCity: CitiesData = {
    city: '',
    state: '',
    temperature: 0,
    genrer: '',
    date: '',
    tracks: [],
  };

  constructor() {
    this.savedStorage = window.localStorage;
  }

  saveCity(value: CitiesData) {
    this.savedCities.push(value);
    this.savedStorage.setItem(this.key, JSON.stringify(this.savedCities));
  }

  fetchSaved(): CitiesData[] {
    if (this.savedStorage) {
      this.savedCities = JSON.parse(this.savedStorage.getItem(this.key) ?? "[]") as CitiesData[];
      return this.savedCities;
    }
    return [];
  }

  delete(index: number) {
    this.savedCities.splice(index, 1);
    this.savedStorage.setItem(this.key, JSON.stringify(this.savedCities));
  }

  selectFromSaved(index: number) {
    this.currentCity = this.savedCities[index];
  }
}
