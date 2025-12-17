

// src/app/services/foodish.service.ts
// src/app/services/foodeish.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FoodishService {
  private cache = new Map<string, string>();
  private readonly FALLBACK =
    'https://via.placeholder.com/600x400?text=Food+Image';

  constructor(private http: HttpClient) {}

  async getRandomImage(category?: string): Promise<string> {
    const cacheKey = `mealdb:${category?.toLowerCase() ?? 'random'}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    try {
      // CATEGORY MODE
      if (category) {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`;
        const res: any = await firstValueFrom(this.http.get(url));

        const meals = res?.meals;
        if (!Array.isArray(meals) || meals.length === 0) {
          this.cache.set(cacheKey, this.FALLBACK);
          return this.FALLBACK;
        }

        const randomMeal =
          meals[Math.floor(Math.random() * meals.length)];

        this.cache.set(cacheKey, randomMeal.strMealThumb);
        return randomMeal.strMealThumb;
      }

      // RANDOM MODE
      const res: any = await firstValueFrom(
        this.http.get('https://www.themealdb.com/api/json/v1/1/random.php')
      );

      const image = res?.meals?.[0]?.strMealThumb ?? this.FALLBACK;
      this.cache.set(cacheKey, image);
      return image;

    } catch {
      this.cache.set(cacheKey, this.FALLBACK);
      return this.FALLBACK;
    }
  }
}
