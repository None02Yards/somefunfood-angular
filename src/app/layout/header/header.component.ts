// src/app/layout/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubandComponent } from '../../pages/menuband/menuband.component'; // <- exact name

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubandComponent], // <- now statically-known symbols
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  showMenu = false;
}
