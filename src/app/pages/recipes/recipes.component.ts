import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true, // <-- if it's standalone
  imports: [CommonModule], // <-- this is required for *ngFor, *ngIf, etc.
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  recipes = [
    { title: 'Breakfast', img: 'assets/images/r1.jpg' },
    { title: 'Lunch', img: 'assets/images/r2.jpg' },
    { title: 'Dinner', img: 'assets/images/r3.jpg' }
  ];
}
