import {iUserStatsModel} from "./iUserStatsModel";
/**
 * Created by cromed on 5/5/16.
 */
export interface iRestResponseModel {
  since: string;
  totalCount: number;
  stats: iUserStatsModel[]
}
