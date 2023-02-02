import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: FoodComponent }]),
  ],
  declarations: [AppComponent, FoodComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
