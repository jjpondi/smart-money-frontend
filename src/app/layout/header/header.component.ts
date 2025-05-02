import { Component } from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [
    Menubar,
    Button,
    MenubarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Transaction',
      icon: 'pi pi-fw pi-wallet',
      routerLink: 'transaction',
    },
    {
      label: 'Category',
      icon: 'pi pi-fw pi-briefcase',
      routerLink: 'categories',
    }
  ];
}