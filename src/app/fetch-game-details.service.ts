import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchGameDetailsService {
  API_KEY = 'htywYQueQDprr6R7GGIuiGsUszCfpNpEaGvBXZBNNyOaprblFIlimCPqx4qb';
 localurl ="https://soccer.sportmonks.com/api/v2.0/continents?api_token="
  constructor(private httpClient: HttpClient) { }
  getleagueDetails(league){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l='+ league);
  }
  getlookupTable(){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1819&teamid=133613');
  }
}
