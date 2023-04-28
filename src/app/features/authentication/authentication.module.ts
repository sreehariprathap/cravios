import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ButtonComponent } from 'src/app/shared/components/common/button/button.component';
import { LogoComponent } from 'src/app/shared/components/common/logo/logo.component';
import { CardComponent } from 'src/app/shared/components/common/card/card.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ButtonComponent,
    LogoComponent,
    CardComponent,
  ],
})
export class AuthenticationModule {}
