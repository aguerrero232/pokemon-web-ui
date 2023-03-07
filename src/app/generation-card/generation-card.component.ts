import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generation-card',
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.css']
})
export class GenerationCardComponent {
  @Input() generation!: any; // decorate the property with @Input()
}
