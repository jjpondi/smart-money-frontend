import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Category } from '../../../model/category';
import { Column } from '../../../model/column';
import { CommonModule } from '@angular/common'; // ca c' le module qui contient NgFor
import { TagModule } from 'primeng/tag';
import {CategoryService} from '../../../services/category.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  imports: [TableModule, CommonModule, TagModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent implements OnInit {
  public categories: Category[]= []
  
  public cols: Column [] = [
    {field: 'name', header: 'Nom'},
    {field: 'plannedInMonth', header: 'Montant planifié par mois'},
    {field: 'type', header: 'Type'},
    {field: 'createdDateTime', header: 'crée le'}
  ];
  constructor(private categoryService: CategoryService) {}
  
  ngOnInit(): void {
    this.setupCols();
    this.categoryService.getCategories().subscribe((data: Category[]): void => {
      this.categories = data;
    })
  }
  setupCols(): void {
    this.cols = [
      { field: 'name', header: 'Nom' },
      { field: 'plannedInMonth', header: 'Montant planifié par mois' },
      { field: 'type', header: 'Type' },
      { field: 'createdDateTime', header: 'Créé le' },
    ];
  }
}
