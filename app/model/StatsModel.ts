import {iUserStatsModel} from "./iUserStatsModel";
import {iProjectModel} from "./iProjectModel";
/**
 * Created by cromed on 5/5/16.
 */
export class StatsModel implements iUserStatsModel {
  _id:string;
  name:string;
  count:number;
  projects:iProjectModel[];
  constructor() {
    this._id = 'SKUI';
    this.name = 'Fake User';
    this.count = 1;
    this.projects = [

    ];
  }
}
