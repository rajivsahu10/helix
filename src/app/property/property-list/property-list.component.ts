import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<any> = [
    {
      "id":1,
      "name":"Birla House",
      "type":"House",
      "price":192000
     },
     {
      "id":2,
      "name":"Tata House",
      "type":"House",
      "price":121000
     },
     {
      "id":1,
      "name":"Mahindra House",
      "type":"House",
      "price":146000
     },{
      "id":1,
      "name":"Jindal House",
      "type":"House",
      "price":168000
     },
     {
      "id":1,
      "name":"Eicher House",
      "type":"House",
      "price":134000
     },
     {
      "id":1,
      "name":"Infosys House",
      "type":"House",
      "price":162000
     }
]
  constructor() { }

  ngOnInit(): void {
  }

}
