import { Component, OnInit } from '@angular/core';

export interface Specification {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  isHeading = true;

  displayedColumns: string[] = ['item', 'cost'];

  specifications: Specification[] = [
    {item: 'Addis Ababa', cost: 150},
    {item: 'Adama', cost: 130},
    {item: 'Bahir Dar', cost: 200},
    {item: 'DireDawa', cost: 300},
    {item: 'Jigijiga', cost: 250},
    {item: 'Hawassa', cost: 135},
    {item: 'Mekele', cost: 205},
  ];

  constructor() { }

  getTotalCost() {
    return this.specifications.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }

}
