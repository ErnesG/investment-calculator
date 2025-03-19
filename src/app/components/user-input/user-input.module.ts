import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { ResultsComponent } from "./results/results.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [UserInputComponent, ResultsComponent],
    exports: [
        UserInputComponent
    ],
    imports: [FormsModule]


})
export class UserInputModule {

}