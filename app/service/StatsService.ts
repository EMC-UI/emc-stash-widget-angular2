/**
 * Created by cromed on 5/5/16.
 */
import {Injectable} from "@angular/core";
import {iRestResponseModel} from "./../model/iRestResponseModel";
import {Http} from '@angular/http';

@Injectable()
export class StatsService {
  public title: string = "Sample service";

  constructor(public http: Http) {
  }

  getUserStats(): any {
    return this.http.request('app/service/userStats.json');
  }

  getProjectStats(): any {
    return this.http.request('app/service/projectStats.json');
  }


}
