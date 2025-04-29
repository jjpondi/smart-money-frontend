import { Component } from '@angular/core';
import {Menubar} from 'primeng/menubar'
import { MenuItem } from 'primeng/api';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [Menubar, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
     {
       label: 'Transaction',
       icon: 'pi pi-fw pi-wallet'
      },

      {label: 'Accueil', 
       icon: 'pi pi-home',
        
      },
      { label: 'À propos', 
        icon: 'pi pi-info', 
      },

      {
       label: 'Category',
       icon:'pi pi-fw pi-briefcase',
      }
  
    ]
}
