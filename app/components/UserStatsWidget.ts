/**
 * Created by cromed on 5/5/16.
 */
import {Component} from '@angular/core';
import {UserStatsRow} from "./UserStatsRow";
import {UserStatsModel} from "../model/UserStatsModel";

@Component({
  selector: 'user-stats-widget',
  directives: [UserStatsRow],
  template: `
  <div>
      <h1>Users with Most Commits {{days}} </h1>
      <div *ngFor="let item of userStats" class="entry">
        <user-stats-row [stats]="item"></user-stats-row>
      </div>
  </div>
  `
})
export class UserStatsWidget {
  public userStats:UserStatsModel[];
  constructor() {
    this.userStats = [
        {
          "_id": "Kris Thompson",
          "projects": [
            {
              "project": "SKUI",
              "count": 13
            }
          ],
          "count": 13
        },
        {
          "_id": "parkec10",
          "projects": [
            {
              "project": "SKUI",
              "count": 12
            }
          ],
          "count": 12
        },
        {
          "_id": "smithj66",
          "projects": [
            {
              "project": "CUC",
              "count": 10
            }
          ],
          "count": 10
        }
    ];
  }
}
