import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from './app/components/header/header.component';
import { UserInputModule } from "./app/components/user-input/user-input.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, UserInputModule]
})
export class AppModule {
    
}