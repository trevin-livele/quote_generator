import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { DateCreatePipe } from './date-create.pipe';
import { CustomeUppercaseDirective } from './custome-uppercase.directive';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuoteDisplayComponent,
    DateCreatePipe,
    CustomeUppercaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
