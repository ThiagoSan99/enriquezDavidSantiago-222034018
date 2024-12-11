import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor( private router: Router){}

  redirigir(){
    this.router.navigate(['/create'])
  }

  redirigir1(){
    this.router.navigate(['/management'])
  }
  redirigir2(){
    this.router.navigate(['/database'])
  }
  redirigir3(){
    this.router.navigate(['/searchproduct'])
  }
}
