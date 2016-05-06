import {Component} from '@angular/core';
import {UserStatsWidget} from "./UserStatsWidget";

@Component({
    selector: 'emc-stash-app',
    directives: [UserStatsWidget],
    template: `
      <h1>Emc Stash App</h1>
      <user-stats-widget></user-stats-widget>
    `
})
export class EmcStashApp { }
