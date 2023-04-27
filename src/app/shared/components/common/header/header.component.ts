import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'candy-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, SharedModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  faBars = faBars;
  faBagShopping = faBagShopping;

  isMenuVisible = false;
  isCartVisible = false;

  ngOnInit(): void {}

  toggleMenu() {
    this.isCartVisible = false
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleCart() {
    this.isMenuVisible = false
    this.isCartVisible = !this.isCartVisible;
  }
}
