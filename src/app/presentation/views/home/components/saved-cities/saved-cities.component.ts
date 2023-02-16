import { Component, OnInit } from '@angular/core';
import { CitiesData } from 'src/app/entity/saved_city.entity';
import { SavedCitiesService } from 'src/app/services/saved_cities/saved-cities.service';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.scss']
})
export class SavedCitiesComponent implements OnInit {

  savedCities: CitiesData[] = [];

  constructor(private savedService: SavedCitiesService) { }

  ngOnInit(): void {
    this.savedCities = this.savedService.fetchSaved();
  }

  deleteCity(index: number){
    this.savedService.delete(index);
  }

  selectCity(index: number){
    this.savedService.currentCity = this.savedCities[index];
  }
}
