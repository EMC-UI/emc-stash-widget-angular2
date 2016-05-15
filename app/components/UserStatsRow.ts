/**
 * Created by cromed on 5/5/16.
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {UserStatsModel} from "./../model/UserStatsModel";

@Component({
  selector: 'user-stats-row',
  inputs:['stats'],
  styles: [`
      .proj-pic {
        border-radius: 1em;
        overflow: hidden;
        width: 3.5em;
        height: 3.5em;
        display: block;
        background-repeat: no-repeat;
        background-position: center middle;
        background-size: cover;
        float: left;
      }
      h3 span {
        opacity: .6;
        font-weight: 100;
      }
      h3 em {
        font-style: normal;
        opacity: 1;
      }
      .top {
        overflow: hidden;
      }
      .bar {
        background: green;
        height: 3vh;
        min-height: 18px;
        display: block;
        border-radius: 0.5em;
      }
  `],
  encapsulation: ViewEncapsulation.Native,
  template: `
    <div class="top">
        <span>
            <span class="proj-pic" style="background-image:url(app/assets/img/proj-1.png)"></span>
        </span>
        <h3>
            <em>{{stats._id}}</em> <span>has</span>
            <em>{{stats.count}}</em> <span>commits with</span>
            <em>{{stats.projects.length}}</em>
            <span>projects [
                <span *ngFor="let proj of stats.projects; let last = last">
                    {{ proj.project }}{{!last ? ', ' : '' }}
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
  stats:UserStatsModel;
}
