import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CategoryPageComponent } from '../category-page/category-page.component';



@Component({
  selector: 'app-category-tabs',
  imports: [TabViewModule, CategoryPageComponent],
  templateUrl: './category-tabs.component.html',
  styleUrl: './category-tabs.component.scss'
})
export class CategoryTabsComponent {

}
