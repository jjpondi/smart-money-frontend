import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Category } from '../../../model/category';


@Component({
  selector: 'app-category-page',
  imports: [TableModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent {
  public categories: Category[]= [
    {
      id: "508c375b-1109-4977-95b8-97a0e89f0aea",
      name: "Loyer",
      plannedInMonth: 500,
      type: "EXPENSE",
      createdDateTime: "2025-04-21T18:55:44.973456"
    },
    {
      id: "bcf5b7cd-8ed5-4f46-9d2f-0f866c8e3a27",
      name: "Alimentation",
      plannedInMonth: 250,
      type: "EXPENSE",
      createdDateTime: "2025-04-21T18:55:44.993401"
    },
    {
      id: "2bba8899-e4e9-4a99-a7be-025b8b63bfda",
      name: "Transport",
      plannedInMonth: 80,
      type: "EXPENSE",
      createdDateTime: "2025-04-21T18:55:44.995469"
    },
    {
      id: "1318b3af-2628-44f7-8524-148603cca122",
      name: "Abonnements",
      plannedInMonth: 50,
      type: "EXPENSE",
      createdDateTime: "2025-04-21T18:55:44.997151"
    },
    {
      id: "6c07f14a-54b7-404c-a9b2-9db674005255",
      name: "Loisirs",
      plannedInMonth: 100,
      type: "EXPENSE",
      createdDateTime: "2025-04-21T18:55:44.998744"
    },
    {
      id: "ba0e7b09-61f1-4712-88fc-def60f1610f5",
      name: "Bourse",
      plannedInMonth: 600,
      type: "INCOME",
      createdDateTime: "2025-04-21T18:55:45.000806"
    },
    {
      id: "500595a4-af06-4909-8299-776728fd693d",
      name: "Job étudiant",
      plannedInMonth: 300,
      type: "INCOME",
      createdDateTime: "2025-04-21T18:55:45.002338"
    },
    {
      id: "63520ab1-d244-43bf-87f4-c7640e671b51",
      name: "Aide des parents",
      plannedInMonth: 200,
      type: "INCOME",
      createdDateTime: "2025-04-21T18:55:45.003841"
    },
    {
      id: "f5dc0b6a-abeb-4e59-8762-64a12d830827",
      name: "Revente d'objets",
      plannedInMonth: 50,
      type: "INCOME",
      createdDateTime: "2025-04-21T18:55:45.005510"
    },
    {
      id: "53580645-bb4e-4d8c-8ae7-ebffb59cd7e3",
      name: "Autres revenus",
      plannedInMonth: 100,
      type: "INCOME",
      createdDateTime: "2025-04-21T18:55:45.007091"
    }
  ];
}
