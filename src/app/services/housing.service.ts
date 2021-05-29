import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient: HttpClient) { }

  getProperties() : Observable<IProperty[]> {
    return this.httpClient.get("data/properties.json").pipe(
      map( data => {

        const propertiesArray : Array<IProperty> = [];
        let dataWithType = data as Array<any>;
        for (const index in dataWithType) {
          console.log("dataItem index: " + index)

          if (data.hasOwnProperty(index)) {
            propertiesArray.push(dataWithType[index] );
          }
        }
        return propertiesArray;
      })
    );
  }
}
