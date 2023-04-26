import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'cravios-button',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() isIcon?: boolean = false;
  @Input() iconType!: string;
  @Input() color!: string;

  @ViewChild('button') button!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.color ? this.renderer.addClass(this.button.nativeElement, this.color) : null
  }
  ngOnInit(): void {}
}
