
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logos-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos-strip.component.html',
  styleUrls: ['./logos-strip.component.scss'],
})
export class LogosStripComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track', { static: true }) track!: ElementRef<HTMLDivElement>;

  baseLogos  = [
    { src: 'assets/images/logo-1.png', alt: 'Vintage Beer' },
    { src: 'assets/images/logo-2.png', alt: 'Good Beer' },
    { src: 'assets/images/logo-3.png', alt: 'Craft Beer Pub' },
    { src: 'assets/images/logo-4.png', alt: 'Craft Beer' },
  ];

  // duplicate for seamless loop
  logos = [...this.baseLogos, ...this.baseLogos];

  private rafId: number | null = null;
  private lastTs = 0;
  private paused = false;

  // px per second
  speed = 30;

  ngAfterViewInit() {
    const el = this.track.nativeElement;
    el.scrollLeft = 0;
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  /** arrows still work */
  scroll(dir: 'left' | 'right') {
    const el = this.track.nativeElement;
    const step = Math.min(el.clientWidth * 0.7, 600);
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  }

  /** main loop */
  private tick = (ts: number) => {
    if (!this.lastTs) this.lastTs = ts;
    const dt = (ts - this.lastTs) / 1000;
    this.lastTs = ts;

    if (!this.paused) {
      const el = this.track.nativeElement;
      const half = el.scrollWidth / 2;

      el.scrollLeft += this.speed * dt;

      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }

      this.updateSpotlight();
    }

    this.rafId = requestAnimationFrame(this.tick);
  };

  private start() {
    if (this.rafId == null) {
      this.lastTs = 0;
      this.rafId = requestAnimationFrame(this.tick);
    }
  }

  private stop() {
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /** spotlight effect: scale & fade based on distance from center */
  private updateSpotlight() {
    const trackEl = this.track.nativeElement;
    const items = Array.from(trackEl.children) as HTMLElement[];

    const viewportCenter = trackEl.scrollLeft + trackEl.clientWidth / 2;
    const maxDistance = trackEl.clientWidth / 2; // how far until "edge"

    for (const item of items) {
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const distance = Math.abs(viewportCenter - itemCenter);

      // normalize 0 (center) -> 1 (edge or beyond)
      const t = Math.min(distance / maxDistance, 1);

      // scale: 1.08 at center -> 0.92 at far edge
      const scale = 0.92 + (1 - t) * 0.16;

      // opacity: 1 at center -> 0.45 at far edge
      const opacity = 0.45 + (1 - t) * 0.55;

      // grayscale: 20% at center -> 100% at edge
      const grayscale = 20 + t * 80;
      const brightness = 0.9 + (1 - t) * 0.1;

      item.style.transform = `scale(${scale})`;

      const img = item.querySelector('img') as HTMLImageElement | null;
      if (img) {
        img.style.opacity = opacity.toString();
        img.style.filter = `grayscale(${grayscale}%) brightness(${brightness})`;
      }
    }
  }

  /** pause on interaction */
  onPointerEnter() { this.paused = true; }
  onPointerLeave() { this.paused = false; this.updateSpotlight(); }
  onFocusIn()      { this.paused = true; }
  onFocusOut()     { this.paused = false; this.updateSpotlight(); }
  onTouchStart()   { this.paused = true; }
  onTouchEnd()     { this.paused = false; this.updateSpotlight(); }
}
