/**
 * Created by cromed on 5/6/16.
 */
/**
 * Created by cromed on 5/5/16.
 */
import {Component} from '@angular/core';
import {ProjectStatsRow} from "./ProjectStatsRow";
import {ProjectStatsModel} from "../model/ProjectStatsModel";

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
  stats:ProjectStatsModel[];
  constructor() {
    this.stats = [
      {
        "_id": "SKUI",
        "users": [
          {
            "user": "parkec10",
            "count": 12
          },
          {
            "user": "ducho",
            "count": 6
          },
          {
            "user": "sjolat2",
            "count": 5
          },
          {
            "user": "Kris Thompson",
            "count": 5
          },
          {
            "user": "brian.reynolds",
            "count": 5
          },
          {
            "user": "tliu",
            "count": 3
          },
          {
            "user": "klaird",
            "count": 3
          },
          {
            "user": "pylem",
            "count": 2
          },
          {
            "user": "anands6",
            "count": 1
          },
          {
            "user": "Kim",
            "count": 1
          },
          {
            "user": "harnid",
            "count": 1
          }
        ],
        "count": 44
      },
      {
        "_id": "CUC",
        "users": [
          {
            "user": "smithj66",
            "count": 10
          },
          {
            "user": "dehru",
            "count": 5
          }
        ],
        "count": 15
      }
    ]
  }
}
