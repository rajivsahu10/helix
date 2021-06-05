
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<IProperty> = [];
  sellRent: number = 1;
  constructor(private route: ActivatedRoute,private housingService: HousingService) {

    // this.properties = [];
    // this.httpClient.get("data/properties.json").subscribe(
    //   (data)=>{
    //     console.log(data);
    //     this.properties=data;
    //   }
    // );

   }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }

    this.housingService.getProperties(this.sellRent).subscribe(
      (data)=> {
        this.properties=data;

        console.log("data received via service: " + data);
        console.log("activated URL: " + this.route.snapshot.url.toString());

      },
      error=> {
        console.log(error);
      }

    );
  }

}
