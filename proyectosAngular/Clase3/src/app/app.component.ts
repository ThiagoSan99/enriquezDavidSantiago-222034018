import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTestComponentComponent } from "./my-test-component/my-test-component.component";
import { SidebarComponent } from "./Shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyTestComponentComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase3';
}
