import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit, AfterViewInit {
  @ViewChild('root', { static: true }) root!: ElementRef<HTMLElement>;

  isVisible = false;

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    // nothing needed here for now
  }

  ngAfterViewInit(): void {
    // SSR/old browser safety
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // fallback: just show the dot
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          this.isVisible = true;
          // only trigger once
          this.observer?.disconnect();
          this.observer = null;
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (this.root?.nativeElement) {
      this.observer.observe(this.root.nativeElement);
    } else {
      // fallback if for some reason the ref is missing
      this.isVisible = true;
    }
  }
}
