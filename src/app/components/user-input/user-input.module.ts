import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { ResultsComponent } from "./results/results.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [UserInputComponent, ResultsComponent],
    exports: [
        UserInputComponent
    ],
    imports: [FormsModule, CommonModule]


})
export class UserInputModule {

}