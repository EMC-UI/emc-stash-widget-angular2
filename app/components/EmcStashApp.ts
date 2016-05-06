import {Component} from '@angular/core';
import {UserStatsWidget} from "./UserStatsWidget";
import {ProjectStatsWidget} from "./ProjectStatsWidget";

@Component({
    selector: 'emc-stash-app',
    directives: [UserStatsWidget],
    host: {
      style: 'display:flex'
    },
    styles: [
      `
      label {
        display:block;
      }
      #left {
        width: 5em;
        flex-shrink: 1;
      }

      #right {
        flex-grow: 1;
      }

      .circle {
        width: 4em;
        height: 4em;
        display: block;
        border-radius: 50%;
        margin: 2em 0;
        background: #d8d8d8;
        text-align:center;
        vertical-align:-20px;
      }
      .circle.active {
        background: #2C95DD;
      }
      `
    ],
    template: `
      <div id="left">
        <label *ngFor="let mode of widgetModes">
          <input
            name="widgetMode"
            type="radio"
            ng-value="mode"
            ng-model="widgetMode" />
            {{mode}}
        </label>

        <!--select name="prevDays" required
          ng-options="option.name for option in prevDays.availableOptions track by option.days"
          ng-model="prevDays.selectedOption"
          ng-change="loadCounts(prevDays.selectedOption.days)">
        </select-->

        <span *ngFor="let item of views" class="circle" [class.active]="item === view" (click)="setView(item)">
          <span style="vertical-align:-2.5em;"><b>{{ item }}</b></span>
        </span>
      </div>
      <div id="right">
          <user-stats-widget></user-stats-widget>
          <project-stats-widget></project-stats-widget>
      </div>

    `
})
export class EmcStashApp {

  //could use const here? //
  public view:string;
  public views:string[] = ['User','Project','Repo'];
  public widgetModes:string[] = ['manual','auto'];
  public widgetMode:string;

  constructor() {
    this.view = this.views[0];
    this.widgetMode = this.widgetModes[0];
  }

  setView(view:string) {
    this.view = view;
  }

}
