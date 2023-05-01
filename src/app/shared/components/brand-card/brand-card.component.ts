import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'candy-brand-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss'],
})
export class BrandCardComponent implements OnInit {
  @Input() brand: any;
  constructor() {}

  ngOnInit(): void {}
}
