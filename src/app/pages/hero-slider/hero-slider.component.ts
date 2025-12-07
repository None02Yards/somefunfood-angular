
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements AfterViewInit, OnDestroy {
  dishImages = [1, 2, 3, 4]; 
  private autoSlideInterval: any;

  @ViewChild('dishContainer') dishContainer!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get loopingImages() {
    return [...this.dishImages, ...this.dishImages];
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.querySelector('.dishes') as HTMLElement;

      if (container) {
        const itemWidth = 160;
        const visibleCount = 4;

        this.autoSlideInterval = setInterval(() => {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const isAtClone = container.scrollLeft >= (itemWidth * visibleCount);

          if (isAtClone) {
            container.scrollTo({ left: 0, behavior: 'auto' });
          } else {
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });
          }
        }, 2500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  scrollDishes(direction: 'left' | 'right') {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.querySelector('.dishes') as HTMLElement;
      if (!container) return;

      const amount = 200;
      container.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  }
}
