import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Bullet = { icon?: string; title: string; desc: string };

@Component({
  selector: 'app-passion-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passion-section.component.html',
  styleUrls: ['./passion-section.component.scss'],
})
export class PassionSectionComponent {
  /** Left headline + sub bullets */
  @Input() heading = 'Our passion is stirred by the colors, flavors, and exotic textures';

  @Input() bullets: Bullet[] = [
    {
      title: 'Only the freshest ingredients',
      desc: 'Our chefs chop and prepare food fresh each morning, never the day before.',
      icon: 'shrimp',
    },
    {
      title: 'We have a passion for food',
      desc: 'Our chefs chop and prepare food fresh each morning, never the day before.',
      icon: 'fish',
    },
    {
      title: 'We never compromise quality',
      desc: 'Our chefs chop and prepare food fresh each morning, never the day before.',
      icon: 'pepper',
    },
  ];

  /** Right image tiles: 4 items; mark one as tall with tile: "tall" */
  @Input() images: { src: string; alt?: string; tile?: 'tall' }[] = [
    { src: 'assets/images/food-2.jpg', alt: 'Roasted beef' },
    { src: 'assets/images/food-1.jpg', alt: 'Fresh salad', tile: 'tall' }, // spans 2 rows
    { src: 'assets/images/food-3.jpg', alt: 'Herb oil' },
    { src: 'assets/images/food-4.jpg', alt: 'Eggs & bacon' },
  ];
}
