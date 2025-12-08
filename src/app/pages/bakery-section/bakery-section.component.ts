
import { Component, ElementRef, AfterViewInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-bakery-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bakery-section.component.html',
  styleUrls: ['./bakery-section.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BakerySectionComponent implements AfterViewInit {
  categories = [
    {
      title: 'Bakery',
      img: 'assets/images/bakery-3.jpg',
      desc: 'Made with wholesome, all-natural ingredients, our products are hand-formed and baked fresh throughout the day.'
    },
    {
      title: 'Lunch',
      img: 'assets/images/portfol02.jpg',
      desc: 'Made with wholesome, all-natural ingredients, our products are hand-formed and baked fresh throughout the day.'
    },
    {
      title: 'Breakfast',
      img: 'assets/images/r3.jpg',
      desc: 'Made with wholesome, all-natural ingredients, our products are hand-formed and baked fresh throughout the day.'
    }
  ];

  isVisible = signal(false);

  constructor(private elRef: ElementRef) {}

 ngAfterViewInit(): void {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible.set(true);
          observer.unobserve(this.elRef.nativeElement);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.elRef.nativeElement);
  } else {
    // Fallback: immediately show content in SSR
    this.isVisible.set(true);
  }
}

}
