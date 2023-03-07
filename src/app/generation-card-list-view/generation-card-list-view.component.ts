import { Component } from '@angular/core';

@Component({
  selector: 'app-generation-card-list-view',
  templateUrl: './generation-card-list-view.component.html',
  styleUrls: ['./generation-card-list-view.component.css']
})
export class GenerationCardListViewComponent {

  //generation should have a number, name
  // generations = [{ number: 0, name: 'Generation 0' }];

  generations = [
    { number: 1, name: 'kanto' },
    { number: 2, name: 'johto' },
    { number: 3, name: 'hoenn' },
    { number: 4, name: 'sinnoh' },
    { number: 5, name: 'unova' },
    { number: 6, name: 'kalos' },
    { number: 7, name: 'alola' },
    { number: 8, name: 'galar' }
  ];
}
