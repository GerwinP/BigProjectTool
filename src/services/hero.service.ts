import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';
import { HEROES } from '../app/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero | undefined> {
    return of(HEROES.find(hero => hero.id === id));
  }
}
