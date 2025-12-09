// src/app/pages/menuband/menuband.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menuband',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menuband.component.html'
})
export class MenubandComponent {   // <-- rename here if you want this name
  menuItems = [
    { title: 'Menu Vertical', img: 'assets/images/menu-1.jpg' },
    { title: 'Menu Small Images', img: 'assets/images/menu-2.jpg' },
    { title: 'Menu Big Images', img: 'assets/images/menu-3.jpg' },
    { title: 'Menu Simple', img: 'assets/images/menu-4.jpg' }
  ];
}
