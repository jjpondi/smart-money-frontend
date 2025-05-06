import { Component, OnInit} from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../model/category';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent implements OnInit { //la classe implémente l’interface OnInit,
//donc il faut toujours définir la méthode ngOnInit() dans la classe CategoryItemComponent.

 categoryForm!: FormGroup;
  isSaving: boolean= false;

  constructor(
    private formbuilder: FormBuilder,
    private categoryService: CategoryService,
    private dynamicDialogConfig: DynamicDialogConfig,
  
    private dynamicDialogRef: DynamicDialogRef
  ){

  }

 ngOnDestroy(): void {
    if(this.dynamicDialogRef){
      this.dynamicDialogRef.close();
    }
  }

    ngOnInit(): void {
      const data = this.dynamicDialogConfig.data as Category;
      this.categoryForm = this.formbuilder.group({
          id: [data.id || null],
          name: [data.name || ''],
          plannedInMonth: [data.plannedInMonth || 0],
          type: [data.type],
        
        })

      }
    }
  