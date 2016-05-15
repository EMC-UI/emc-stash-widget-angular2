/**
 * Created by cromed on 5/5/16.
 */
import {Component, Inject} from '@angular/core';
import {UserStatsRow} from "./UserStatsRow";
import {UserStatsModel} from "../model/UserStatsModel";
import {StatsService} from "../service/StatsService";
import {Response} from '@angular/http';

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
  constructor(@Inject(StatsService) service:StatsService) {
    service.getUserStats().subscribe((res: Response) => {
      this.userStats = res.json().stats;
    });
  }
}
