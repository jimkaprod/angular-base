import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, UserModule],
  declarations: [AppComponent, HelloComponent, UserDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
