import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatStepperModule, MatIconModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HelloComponent,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
