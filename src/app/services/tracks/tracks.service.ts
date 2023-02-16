import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musics } from 'src/app/entity/tracks.entity';
import { MusicsRepository } from '../../data/repository/soundtrack/musics.repository'

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor(private MusicsRepository: MusicsRepository) { }

  fetchMusics(genrer: string): Observable<Musics> {
    return this.MusicsRepository.fetchTracksByGenrer(genrer);
  }
}
