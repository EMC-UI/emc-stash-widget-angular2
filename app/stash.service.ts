/**
 * Created by cromed on 5/5/16.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class StashService {
  public title: string = "Sample service";

  constructor() {
    console.log('hello from sample service');
  }
}
