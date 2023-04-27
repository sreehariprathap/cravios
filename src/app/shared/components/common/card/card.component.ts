import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'cravios-card',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image!: string
  constructor() { }

  ngOnInit(): void {
  }

}
