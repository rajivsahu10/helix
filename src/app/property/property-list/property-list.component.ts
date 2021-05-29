
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : any;

  constructor(private housingService: HousingService) {
    this.housingService.getProperties().subscribe(
      (data)=> {
        console.log("data received via service: " + data);
        this.properties=data;
      },
      error=> {
        console.log(error);
      }

    );


    // this.properties = [];
    // this.httpClient.get("data/properties.json").subscribe(
    //   (data)=>{
    //     console.log(data);
    //     this.properties=data;
    //   }
    // );

   }

  ngOnInit(): void {
  }

}
