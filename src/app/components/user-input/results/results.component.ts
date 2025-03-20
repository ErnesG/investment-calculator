import { Component, Input } from '@angular/core';
import { Investment } from '../../../model/investment.model';

@Component({
  selector: 'app-results',
  standalone: false,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input({required: true}) results!: Investment[];
}
