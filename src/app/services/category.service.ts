import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

/**
 * Un Service est une classe réutilisable qui centralise la logique métier, comme :
 *
 * Appeler des API ()
 *
 * Gérer les données
 *
 * Partager des infos entre composants
 *
 * Effectuer des calculs ou traitements communs
 *
 * 👉 But principal : séparer la logique métier du code d’affichage (HTML/Component).
 */
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiURL: string = 'https://sgm-api.geekinstitut.com/api/categories';//API en production'
  
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL);
  }

  getCategoriesByType(type: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiURL}/type/${type}`);
  }

  createCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.apiURL, category);
  }

  updateCategory(id: string, category: Category): Observable<Category>{
    return this.http.put<Category>(`${this.apiURL}/${id}`, category);
  }

  deleteCategory(id: string): Observable<void>{
    return this.http.delete<void>(this.apiURL+'/'+id);
  }
}
  
