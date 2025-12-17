// src\app\pages\home\home.component.ts
import { Component } from '@angular/core';
import { HeroSliderComponent } from '../hero-slider/hero-slider.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { AppSectionComponent } from '../app-section/app-section.component'; 
import { BlogComponent } from '../blog/blog.component';
import { CounterSectionComponent } from '../counter-section/counter-section.component';
import { BakerySectionComponent } from '../bakery-section/bakery-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { FeaturesSectionComponent } from '../features-section/features-section.component';
import { PassionSectionComponent } from '../passion-section/passion-section.component';
import { LogosStripComponent } from '../logos-strip/logos-strip.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ HeroSliderComponent, RecipesComponent, AppSectionComponent, BlogComponent, CounterSectionComponent, BakerySectionComponent,
     ContactSectionComponent, TestimonialComponent , FeaturesSectionComponent , PassionSectionComponent, LogosStripComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
