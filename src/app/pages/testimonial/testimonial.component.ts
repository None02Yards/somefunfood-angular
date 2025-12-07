// import { Component, Inject } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { PLATFORM_ID } from '@angular/core';

// @Component({
//   selector: 'app-testimonial',
//   standalone: true,
//   imports: [CommonModule, SlickCarouselModule],
//   templateUrl: './testimonial.component.html',
//   styleUrls: ['./testimonial.component.scss']
// })
// export class TestimonialComponent {
//   testimonials = [
//     {
//       name: 'Thomas Smith',
//       title: 'Angel Investor',
//       heading: 'I love Sway',
//       text: 'The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.',
//       img: 'assets/images/user1.jpg'
//     },
//     {
//       name: 'Stella Smith',
//       title: 'Web Designer',
//       heading: 'It was awesome',
//       text: 'The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.',
//       img: 'assets/images/user2.jpg'
//     },
//     {
//       name: 'Vincent Smith',
//       title: 'CEO at Ritmo',
//       heading: 'It was delicious',
//       text: 'The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.',
//       img: 'assets/images/user3.jpg'
//     }
//   ];

//   stars = Array(5).fill(0);

//   // slideConfig = {
//   //   slidesToShow: 3,
//   //   slidesToScroll: 1,
//   //   arrows: false,
//   //   dots: true,
//   //   infinite: true,
//   //   autoplay: true,
//   //   autoplaySpeed: 3000,
//   //   responsive: [
//   //     {
//   //       breakpoint: 1024,
//   //       settings: {
//   //         slidesToShow: 2
//   //       }
//   //     },
//   //     {
//   //       breakpoint: 768,
//   //       settings: {
//   //         slidesToShow: 1
//   //       }
//   //     }
//   //   ]
//   // };

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   isBrowser(): boolean {
//     return isPlatformBrowser(this.platformId);
//   }
// }


import { Component, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) register(); }

  testimonials = [
    {
      img: 'assets/images/user1.jpg',
      name: 'John Doe',
      title: 'Customer',
      heading: 'Amazing Service',
      text: 'The food was delivered hot and fresh. Will order again!'
    },
    {
      img: 'assets/images/user2.jpg',
      name: 'Jane Smith',
      title: 'Customer',
      heading: 'Great Quality',
      text: 'The meals are always tasty and well-prepared.'
    },
    {
      img: 'assets/images/user3.jpg',
      name: 'Mike Johnson',
      title: 'Customer',
      heading: 'Fast Delivery',
      text: 'The delivery was super fast and the staff is friendly.'
    },
    {
      img: 'assets/images/user1.jpg',
      name: 'Sarah Lee',
      title: 'Customer',
      heading: 'Highly Recommend',
      text: 'Great value for money. I am a repeat customer.'
    }
  ];

  stars = Array(5).fill(0);
}
