import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Musics } from 'src/app/entity/tracks.entity';

@Injectable({
  providedIn: 'root'
})
export class MusicsRepository {

  private API = "https://spotify23.p.rapidapi.com/search/";

  constructor(private http: HttpClient) { }

  fetchTracksByGenrer(genrer: string): Observable<Musics> {
    return this.http.get<Musics>(`${this.API}?q=${genrer}&type=tracks&offset=${this.randomIntFromInterval(0, 100)}&limit=16&numberOfTopResults=5`, {
      headers: {
        "X-RapidAPI-Key": "e5b20e38f9msh333d862df21ba21p126b30jsna96071052a1c",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com"
      }
    });
  }

  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
