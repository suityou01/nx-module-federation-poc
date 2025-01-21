import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'mfe-poc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';
}
