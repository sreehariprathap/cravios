import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoaderComponent } from './shared/loader/loader.component';
import { HeaderComponent } from './shared/components/common/header/header.component';
import { BottomNavComponent } from './shared/components/common/bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LoaderComponent,
    HeaderComponent,
    BottomNavComponent
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
