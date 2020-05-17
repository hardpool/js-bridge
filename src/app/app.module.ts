import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsBridgeModule } from '@hardpool/js-bridge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		JsBridgeModule.forRoot(),
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
