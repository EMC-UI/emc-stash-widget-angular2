import {Component} from '@angular/core';
import {UserStatsWidget} from "./UserStatsWidget";
import {ViewModel} from "../model/ViewModel";

@Component({
    selector: 'emc-stash-app',
    directives: [UserStatsWidget],
    host: {
      style: 'display:flex'
    },
    styles: [

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
          <span style="vertical-align:-2.5em;"><b>{{ item.name }}</b></span>
        </span>
      </div>
      <div id="right">
          <user-stats-widget></user-stats-widget>
      </div>

    `
})
export class EmcStashApp {

  //could use const here? //
  public view:ViewModel;
  public views:ViewModel[];
  public widgetModes:string[];
  public widgetMode:string;

  constructor() {
    this.views = [];
    this.views.push(new ViewModel(0, 'User'));
    this.views.push(new ViewModel(1, 'Project'));
    this.views.push(new ViewModel(2, 'Repo'));
    this.view = this.views[0];
    this.widgetModes = ['click','presentation'];
    this.widgetMode = this.widgetModes[0];
  }

  setView(view:ViewModel) {
    this.view = view;
  }

}
