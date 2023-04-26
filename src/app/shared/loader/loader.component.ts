import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { LoaderService } from 'src/app/core/services/loader.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/loader.json',
  };
  animationCreated(animationItem: AnimationItem): void {}

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
  }

}
