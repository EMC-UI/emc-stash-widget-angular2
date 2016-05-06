/**
 * Created by cromed on 5/5/16.
 */
import {Component} from '@angular/core';
import {UserRow} from "./user-row.component";

@Component({
  selector: 'emc-stash-widget',
  directives: [UserRow],
  template: `
  <p>My Emc Stash Widget</p>
  <div>
      <h1>Users with Most Commits {{days}} </h1>
      <user-row></user-row>
  </div>
  `
})
export class EmcStashWidget {
  days: number;
  constructor() {
    this.days = 7
  }
}
