/**
 * Created by cromed on 5/6/16.
 */
import {Component, Inject} from '@angular/core';
import {ProjectStatsRow} from "./ProjectStatsRow";
import {ProjectStatsModel} from "../model/ProjectStatsModel";
import {StatsService} from "../service/StatsService";
import {Response} from '@angular/http';

@Component({
  selector: 'project-stats-widget',
  directives: [ProjectStatsRow],
  template: `
  <h1>Projects with Most Commits</h1>
  <div *ngFor="let item of projectStats" class="entry">
    <project-stats-row [stats]="item"></project-stats-row>
  </div>
  `
})
export class ProjectStatsWidget {
  projectStats:ProjectStatsModel[];
  constructor(@Inject(StatsService) service:StatsService) {
    service.getProjectStats().subscribe((res: Response) => {
      this.projectStats = res.json().stats;
    })
  }
}
