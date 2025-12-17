import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PexelsService {
  private base = 'https://api.pexels.com/v1';
  private cache = new Map<string, string[]>();

  constructor(private http: HttpClient) {}

  private headers() {
    return new HttpHeaders({ Authorization: environment.PEXELS_API_KEY });
  }

  // search for images (returns array of image URLs)
  async searchImages(query = 'food', per_page = 8): Promise<string[]> {
    const key = `${query}:${per_page}`;
    if (this.cache.has(key)) return this.cache.get(key)!;

    try {
      const url = `${this.base}/search?query=${encodeURIComponent(query)}&per_page=${per_page}`;
      const res: any = await firstValueFrom(this.http.get(url, { headers: this.headers() }));
      const images = (res?.photos ?? []).map((p: any) => p.src?.medium || p.src?.original);
      this.cache.set(key, images);
      return images;
    } catch (err) {
      console.error('Pexels fetch failed', err);
      return [];
    }
  }

  // convenience: pick a random image (or first)
  async getRandomImage(query = 'food'): Promise<string | null> {
    const imgs = await this.searchImages(query, 8);
    if (!imgs || imgs.length === 0) return null;
    return imgs[Math.floor(Math.random() * imgs.length)];
  }
}