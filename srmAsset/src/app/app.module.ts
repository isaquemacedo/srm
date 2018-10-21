import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ManagementComponent } from './management/management.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { AccountDigitalComponent } from './account-digital/account-digital.component';

// Injeções
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ManagementComponent,
    ReceivablesComponent,
    AccountDigitalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
