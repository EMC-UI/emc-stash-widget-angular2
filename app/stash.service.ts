/**
 * Created by cromed on 5/5/16.
 */
import {Injectable} from "@angular/core";
import {iRestResponseModel} from "./iRestResponseModel";

@Injectable()
export class StashService {
  public title: string = "Sample service";

  constructor() {
    console.log('hello from sample service');
  }

  getStats():iRestResponseModel {
    return {
      "since": "7",
      "totalCount": 70,
      "stats": [
        {
          "_id": "Kris Thompson",
          "projects": [
            {
              "project": "SKUI",
              "count": 13
            }
          ],
          "count": 13
        },
        {
          "_id": "parkec10",
          "projects": [
            {
              "project": "SKUI",
              "count": 12
            }
          ],
          "count": 12
        },
        {
          "_id": "smithj66",
          "projects": [
            {
              "project": "CUC",
              "count": 10
            }
          ],
          "count": 10
        },
        {
          "_id": "ducho",
          "projects": [
            {
              "project": "SKUI",
              "count": 7
            }
          ],
          "count": 7
        },
        {
          "_id": "brian.reynolds",
          "projects": [
            {
              "project": "SKUI",
              "count": 6
            }
          ],
          "count": 6
        },
        {
          "_id": "sjolat2",
          "projects": [
            {
              "project": "SKUI",
              "count": 5
            }
          ],
          "count": 5
        },
        {
          "_id": "dehru",
          "projects": [
            {
              "project": "CUC",
              "count": 5
            }
          ],
          "count": 5
        },
        {
          "_id": "tliu",
          "projects": [
            {
              "project": "SKUI",
              "count": 4
            }
          ],
          "count": 4
        },
        {
          "_id": "klaird",
          "projects": [
            {
              "project": "SKUI",
              "count": 3
            }
          ],
          "count": 3
        },
        {
          "_id": "pylem",
          "projects": [
            {
              "project": "SKUI",
              "count": 2
            }
          ],
          "count": 2
        },
        {
          "_id": "anands6",
          "projects": [
            {
              "project": "SKUI",
              "count": 1
            }
          ],
          "count": 1
        },
        {
          "_id": "Kim",
          "projects": [
            {
              "project": "SKUI",
              "count": 1
            }
          ],
          "count": 1
        },
        {
          "_id": "harnid",
          "projects": [
            {
              "project": "SKUI",
              "count": 1
            }
          ],
          "count": 1
        }
      ]
    }
  }
}
