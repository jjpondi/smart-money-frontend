import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../model/category';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {NgIf} from '@angular/common';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-category-item',
  imports: [ ReactiveFormsModule,
    InputText,
    Button,
    NgIf],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent implements OnInit, OnDestroy { //la classe implémente l’interface OnInit,
//donc il faut toujours définir la méthode ngOnInit() dans la classe CategoryItemComponent.

 categoryForm!: FormGroup;
  isSaving: boolean= false;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private dynamicDialogConfig: DynamicDialogConfig,
    private messageService: MessageService,
    private dynamicDialogRef: DynamicDialogRef
  ){

  }

 ngOnDestroy(): void {
    if(this.dynamicDialogRef){
      this.dynamicDialogRef.close();
    }
  }

    
  ngOnInit(): void {
    const data: Category = this.dynamicDialogConfig.data as Category;
    this.categoryForm = this.formBuilder.group({
      id: [data.id || null],
      name: [data.name || '', [Validators.required, Validators.minLength(2)]],
      plannedInMonth: [data.plannedInMonth|| 0, [Validators.required, Validators.min(1)]],
      type: [data.type]
    })
  }
     
  submit() {
    if(this.categoryForm.invalid){
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    this.categoryService.createCategory(this.categoryForm.value).subscribe({
      next: (category: Category)=>{
        this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Category Crée'})
        this.isSaving = false;
        this.dynamicDialogRef.close(category);
      }
    });
  }
  }



    
  