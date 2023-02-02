import { Component } from '@angular/core';
import { FoodType } from '../enums/food-type.enum';
import { Food } from '../models/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {

  // Info: Do not change this list!
  public listOfFood: Food[] = [
    {
      name: 'Tomato',
      type: FoodType.Vegetable,
    },
    {
      name: 'Apple',
      type: FoodType.Fruit,
    },
    {
      name: 'Carrot',
      type: FoodType.Vegetable,
    },
    {
      name: 'Banana',
      type: FoodType.Fruit,
    },
  ];

  get fruits(): Food[] {
    //TODO: return all Objects of type 'Fruit' and display them
    return [];
  }

  get vegetables(): Food[] {
    //TODO: return all Objects of type 'Vegetable' and display them
    return [];
  }
}
