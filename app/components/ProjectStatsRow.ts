/**
 * Created by cromed on 5/6/16.
 */
/**
 * Created by cromed on 5/5/16.
 */
import {Component} from '@angular/core';
import {ProjectStatsModel} from "./../model/ProjectStatsModel";

@Component({
  selector: 'project-stats-row',
  inputs: ['stats'],
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
  template: `
    <div class="top">
        <span ng-if="$index<5">
            <span class="proj-pic" style="background-image:url(app/assets/img/proj-{{$index}}.png)"></span>
        </span>

        <h3>
            <em>{{item._id}}</em> <span>has</span>
            <em>{{item.count}}</em> <span>commits with</span>
            <em>{{item.projects.length}}</em>
            <span>projects [
                <span ng-repeat="proj of item.projects">
                    {{ proj.project }}
                </span> ]
            </span>
        </h3>
        <div class="container">
            <div class="bar" style="width: {{item.commitPercent}}%"></div>
        </div>
    </div>
  `
})
export class ProjectStatsRow {
  stats:ProjectStatsModel;
}
