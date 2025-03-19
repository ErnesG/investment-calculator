import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from './app/components/header/header.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule]
})
export class AppModule {
    
}