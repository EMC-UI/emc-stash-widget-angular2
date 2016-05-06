/**
 * Created by cromed on 5/5/16.
 */
import {Component} from '@angular/core';
import {StatsModel} from "./../model/StatsModel";

@Component({
  selector: 'user-stats-row',
  template: `
    <div>User Row {{stats.name}} {{stats.count}}</div>
    <span *ngFor="let project of stats.projects">
      {{project}}
    </span>
    <div class="top">
        <span>
            <span class="proj-pic" style="background-image:url(assets/img/proj-1.png)"></span>
        </span>

        <h3>
            <em>{{stats._id}}</em> <span>has</span>
            <em>{{stats.count}}</em> <span>commits with</span>
            <em>{{stats.projects.length}}</em>
            <span>projects [
                <span ng-repeat="proj in stats.projects track by $index">
                    {{ proj }}
                    <span ng-show="$index < stats.projects.length-1">, </span>
                </span> ]
            </span>
        </h3>
        <div class="container">
            <div class="bar" style="width: {{stats.commitPercent}}%"></div>
        </div>
    </div>
  `
})
export class UserStatsRow {
  stats:StatsModel;
  constructor() {
    this.stats = new StatsModel();
  }
}
