import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailComponent } from './detail/detail.component';
import { BackgroundColorDirective } from './background-color.directive';
import { DateAgoPipe } from './date-ago.pipe';
import { FormComponent } from './form/form.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    DetailComponent,
    BackgroundColorDirective,
    DateAgoPipe,
    FormComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
