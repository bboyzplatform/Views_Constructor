import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FakeApiService {

  private apiUrl = 'http://10.0.0.5:40777/api/ModelFake/GetFakeModels';

  constructor(private http: Http) {}

  getSources(){
    return this
      .http
      .get(this.apiUrl).map((response) => {
        console.log(response.json()[0]);
        return response.json()[0];
      } );
  }

}
