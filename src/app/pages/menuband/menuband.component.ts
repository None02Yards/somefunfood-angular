// src/app/pages/menuband/menuband.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodishService } from '../../services/foodiesh.service';

@Component({
  selector: 'app-menuband',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menuband.component.html',
  styleUrls: ['./menuband.component.scss']
})
export class MenubandComponent implements OnInit {
  @Input() provider: 'mealdb' = 'mealdb';

  // VALID MealDB categories only
  categories = [
    { key: 'Beef', title: 'Menu Vertical' },
    { key: 'Chicken', title: 'Menu Small Images' },
    { key: 'Dessert', title: 'Menu Big Images' }
  ];

  menuItems: {
    title: string;
    img: string | null;
    loading: boolean;
    error: boolean;
  }[] = [];

  constructor(private foodish: FoodishService) {}

  async ngOnInit() {
    // Initialize UI state
    this.menuItems = this.categories.map(c => ({
      title: c.title,
      img: null,
      loading: true,
      error: false
    }));

    await Promise.all(
      this.categories.map(async (cat, index) => {
        try {
          const img = await this.foodish.getRandomImage(cat.key);
          this.menuItems[index].img = img;
        } catch {
          this.menuItems[index].error = true;
        } finally {
          this.menuItems[index].loading = false;
        }
      })
    );
  }
}
