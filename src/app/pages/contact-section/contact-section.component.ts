import { Component, inject, AfterViewInit, ElementRef, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
  standalone: true,
    imports: [CommonModule], // ✅ Add it here

})
export class ContactSectionComponent implements AfterViewInit {
  private elRef = inject(ElementRef);
  isVisible = signal(false);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngAfterViewInit(): void {
    if (this.isBrowser && 'IntersectionObserver' in window) {
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
      this.isVisible.set(true); // SSR fallback
    }
  }
}
