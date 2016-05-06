/**
 * Created by cromed on 5/5/16.
 */
import {Component} from '@angular/core';
import {UserStatsRow} from "./UserStatsRow";

@Component({
  selector: 'user-stats-widget',
  directives: [UserStatsRow],
  template: `
  <p>User Stats Widget</p>
  <div>
      <h1>Users with Most Commits {{days}} </h1>
      <user-stats-row></user-stats-row>
  </div>
  `
})
export class UserStatsWidget {
  days: number;
  constructor() {
    this.days = 7
  }
}
