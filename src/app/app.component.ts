import { Component } from '@angular/core';
import{FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './layout/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterOutlet} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ButtonModule, HeaderComponent, MenubarModule, FooterComponent, 
   RouterOutlet, HomeComponent,TableModule, CommonModule, TagModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smart-money-frontend';

  onClick(){
      alert("hiiiiii")
   }
}