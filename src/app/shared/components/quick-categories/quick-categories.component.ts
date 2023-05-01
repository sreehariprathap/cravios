import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'candy-quick-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-categories.component.html',
  styleUrls: ['./quick-categories.component.scss'],
})
export class QuickCategoriesComponent implements OnInit {
  @Input() category!: { name: string; image: string; link: string };
  constructor() {}

  ngOnInit(): void {}
}
