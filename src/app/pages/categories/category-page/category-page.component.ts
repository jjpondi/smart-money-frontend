import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { Category } from '../../../model/category';
import { Column } from '../../../model/column';
import { CommonModule } from '@angular/common'; // ca c'est le module qui contient NgFor
import { TagModule } from 'primeng/tag';
import { CategoryService } from '../../../services/category.service';
import { OnInit } from '@angular/core';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import { Input } from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { CategoryItemComponent } from '../category-item/category-item.component';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-category-page',
  imports: [DatePipe,CurrencyPipe,TableModule, CommonModule, TagModule, IconField, InputText,InputIcon,Button],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent implements OnInit {
  public categories: Category[]= []
  public globalFilterFields: string[] = [];
  @Input({required: true}) type: 'EXPENSE' | 'INCOME' = 'EXPENSE';
  
  public cols: Column [] = [];
  private ref!: DynamicDialogRef;
    constructor(private categoryService: CategoryService, private DialogService: DialogService) {}

    public onGlobalFilter(table: Table, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

   ngOnInit(): void {
     this.setupCols();
     this.getByType(this.type);
   }
   getByType(type: string){
    this.categoryService.getCategoriesByType(type).subscribe((data: Category[]): void => {
      this.categories = data;
    })
  }
   private setupCols(): void {
     this.cols = [
       { field: 'name', header: 'Nom' },
       { field: 'plannedInMonth', header: 'Montant planifié par mois' },
       { field: 'type', header: 'Type' },
       { field: 'createdDateTime', header: 'Créé le' },
     ];
     this.globalFilterFields = ['name', 'plannedInMonth', 'type'];
   }
 
   openAddDialog(): void
   {
       this.DialogService.open(CategoryItemComponent, {
       header: "Nouvelle categorie",
       closable:true, // ca cest pour avoir un formulaire qu'on peut fermer
       width:'60vw',
       modal:true,
       data:{type:this.type}
   })
        this.ref.onClose.subscribe((created: Category)=>{
            if(created){
            this.categories.unshift(created);
             }
         })

  }
}

 

