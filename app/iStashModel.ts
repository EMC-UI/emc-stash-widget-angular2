/**
 * Created by cromed on 5/5/16.
 */
import {iProjectModel} from "./iProjectModel";

/**
 * {
      "_id": "Kris Thompson",
      "projects": [
        {
          "project": "SKUI",
          "count": 13
        }
      ],
      "count": 13
    }
 */


export interface iStashModel {
  _id: string;
  projects: iProjectModel[];
  count: number;
}
