import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  faPlus,
  faChevronRight,
  faCheck,
  faLocationDot,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

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
  @Input() iconType!: any;
  @Input() color!: string;

  @ViewChild('button') button!: ElementRef;

  faIcon: any;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.color
      ? this.renderer.addClass(this.button.nativeElement, this.color)
      : null;
  }

  ngOnInit(): void {
  }

  assignButtonIcon(iconType: any) {
    switch (iconType) {
      case 'plus':
        return faPlus;
        break;
      case 'right':
        return faChevronRight;
        break;
      case 'check':
        return faCheck;
        break;
      case 'location':
        return faLocationDot;
        break;
      case 'bookmark':
        return faBookmark;
        break;
      default:
        return faChevronRight;
    }
  }
}
