import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-counter-section',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './counter-section.component.html',
  styleUrls: ['./counter-section.component.scss']
})
export class CounterSectionComponent implements OnInit {
  counters = [
    { icon: 'fas fa-pizza-slice', value: 0, target: 30, label: 'Pizzas' },
    { icon: 'fas fa-fish', value: 0, target: 10, label: 'Fish' },
    { icon: 'fas fa-drumstick-bite', value: 0, target: 20000, label: 'Clients' },
    { icon: 'fas fa-hotdog', value: 0, target: 54, label: 'Fries' }
  ];

  ngOnInit(): void {
    this.counters.forEach(counter => {
      const increment = counter.target > 1000 ? 100 : 1;
      const interval = setInterval(() => {
        if (counter.value < counter.target) {
          counter.value += increment;
          if (counter.value > counter.target) counter.value = counter.target;
        } else {
          clearInterval(interval);
        }
      }, 30);
    });
  }
}
