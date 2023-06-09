import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FontAwesomeModule, LottieModule, ReactiveFormsModule, FormsModule],
  providers: [DatePipe],
})
export class SharedModule {}
export function playerFactory() {
  return player;
}
