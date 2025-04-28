import { Person } from "./person";
import { Student } from "./student";

function greet(name:string): String{
 const names : string[]= ['john','jasmine'];
 let person: Person = new Person();  // on a creer la classe person et on a creer un constructeur 
 let student : Student = {       // ca cest linterface qu'on a creer dans student.ts
   id: 0,
   name: "jasmine",
   email: "jacq@yahoo.com",
   phone: "123456",

 }
 return "hello"+ name;
} 