import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Product } from 'src/app/core/models/Product.model';

@Component({
  selector: 'cravios-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}

  addToFavorite(id: any) {
    this.product.isFavorite = !this.product.isFavorite;
  }
}
