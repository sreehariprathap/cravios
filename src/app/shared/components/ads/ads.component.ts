import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'candy-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  @Input() imageUrl!: string;
  constructor() {}

  ngOnInit(): void {}
}
