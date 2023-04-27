import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { ButtonComponent } from 'src/app/shared/components/common/button/button.component';
import { LogoComponent } from 'src/app/shared/components/common/logo/logo.component';
import { CardComponent } from 'src/app/shared/components/common/card/card.component';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ButtonComponent,
    LogoComponent,
    CardComponent,
  ],
})
export class AuthenticationModule {}
