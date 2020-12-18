import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BigProject } from 'src/models/big-project';
import { BigProjectService } from 'src/services/big-project.service';

@Component({
  selector: 'app-big-projects',
  templateUrl: './big-projects.component.html',
  styleUrls: ['./big-projects.component.sass']
})
export class BigProjectsComponent implements OnInit {

  bigProjects: BigProject[] = [];
  doneBigProjects: BigProject[] = [];

  constructor(private bigProjectService: BigProjectService) { }

  ngOnInit(): void {
    this.getBigProjects();
  }

  getBigProjects(): void {
    this.bigProjectService.getBigProjects().subscribe(bigProjects => this.bigProjects = bigProjects)
  }

  addBigProject(ticket: string, name: string): void {
    this.bigProjects.push({ id: this.bigProjects.length, ticket: ticket, name: name});
  }
  
  drop(event: CdkDragDrop<BigProject[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex)
    }
  }
}
