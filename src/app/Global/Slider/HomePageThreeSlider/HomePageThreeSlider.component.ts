import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'embryo-HomePageThreeSlider',
  templateUrl: './HomePageThreeSlider.component.html',
  styleUrls: ['./HomePageThreeSlider.component.scss']
})
export class HomePageThreeSliderComponent implements OnInit, OnChanges {

   @Input() isRTL : boolean = false;

   slideConfig : any;

   slides : any = [
      {
         img         : "assets/images/img1.jpg",
         content     : "Pacucha",
         heading_one : "Visita nuestra maravilla pacucha ",
        
      },
      {
         img         : "assets/images/img2.jpg",
         content     : "Sondor",
         heading_one : "Sondor 2018",
   
      }, 
      {
         img         : "assets/images/img3.jpg",
         content     : "2018 Latest Collection",
         heading_one : "Men's Suiting and Clothing",
         
      }
   ]

   constructor() { }

   ngOnInit() {
   }

   ngOnChanges() {
      this.slideConfig = {
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         dots: false,
         rtl: this.isRTL,
         responsive: [
            {
               breakpoint: 991,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 768,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 480,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            }
         ]
      };
   }

}
