import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = [
    'assets/images/posts/choco.png',
    'assets/images/posts/candies.png',
    'assets/images/posts/cupcake.png',
  ];
  categories = [
    {
      name: 'chocolates',
      image: 'assets/icons/choco.png',
      link: '',
    },
    {
      name: 'cakes',
      image: 'assets/icons/cake.png',
      link: '',
    },
    {
      name: 'cupcakes',
      image: 'assets/icons/cupcake.png',
      link: '',
    },
    {
      name: 'doughnuts',
      image: 'assets/icons/doughnut.png',
      link: '',
    },
    {
      name: 'biscuits',
      image: 'assets/icons/gingerbread.png',
      link: '',
    },
    {
      name: 'ice creams',
      image: 'assets/icons/ice-cream.png',
      link: '',
    },
    {
      name: 'ice pops',
      image: 'assets/icons/ice-pop.png',
      link: '',
    },
    {
      name: 'drinks',
      image: 'assets/icons/drink.png',
      link: '',
    },
    {
      name: 'jams',
      image: 'assets/icons/jam.png',
      link: '',
    },
    {
      name: 'pan cakes',
      image: 'assets/icons/pancake.png',
      link: '',
    },
    {
      name: 'macarones',
      image: 'assets/icons/macaron.png',
      link: '',
    },
    {
      name: 'fruits',
      image: 'assets/icons/orange.png',
      link: '',
    },
    {
      name: 'cookies',
      image: 'assets/icons/cookie.png',
      link: '',
    },
  ];
  brands = [
    { name: 'Baskin Robins', image: 'assets/images/brands/br.png', link: '' },
    { name: 'Oreo', image: 'assets/images/brands/oreo.webp', link: '' },
    { name: 'Cadbury', image: 'assets/images/brands/cadbury.png', link: '' },
    { name: 'Haagen-Dazs', image: 'assets/images/brands/dazs.jpg', link: '' },
    { name: 'Dunkin donuts', image: 'assets/images/brands/dunkin.jpg', link: '' },
    { name: 'Nestle', image: 'assets/images/brands/nastle.jpg', link: '' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
