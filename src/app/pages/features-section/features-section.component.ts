import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: 'assets/images/icons/icon1.png',
      title: 'Fast and Free Shipping'
    },
    {
      icon: 'assets/images/icons/icon2.png',
      title: 'Hassle-Free Returns'
    },
    {
      icon: 'assets/images/icons/icon3.png',
      title: 'Satisfaction Guarantee'
    }
  ];
}

