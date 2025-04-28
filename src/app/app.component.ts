import { Component } from '@angular/core';
import{FormsModule } from '@angular/forms';
import { HeaderComponent} from './header/header.component';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormsModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smart-money-frontend';

  onClick(){
      alert("hiiiiii")
   }
}