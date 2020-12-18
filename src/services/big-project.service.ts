import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { BigProject } from '../models/big-project';
import { BIGPROJECTS } from '../app/mock-big-projects';

@Injectable({
  providedIn: 'root'
})
export class BigProjectService {

  constructor() { }

  getBigProjects(): Observable<BigProject[]> {
    return of(BIGPROJECTS);
  }
}
