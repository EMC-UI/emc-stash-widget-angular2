import {iStashModel} from "./iStashModel";
/**
 * Created by cromed on 5/5/16.
 */
export class StatsModel implements iStashModel {
  name:string;
  count:number;
  projects:String[];
  constructor() {
    this.name = 'Fake User';
    this.count = 1;
    this.projects = ['project1', 'project2'];
  }
}
