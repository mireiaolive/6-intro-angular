import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { EscenaComponent } from "./modulo/escena/escena.component";
import { HomeComponent } from "./modulo/home/home.component";

@NgModule({
    declarations: [AppComponent, EscenaComponent, HomeComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
