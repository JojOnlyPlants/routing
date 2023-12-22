import { Component } from '@angular/core';
import { Observable } from 'rxjs';  
import { OnInit } from '@angular/core';
import { HttpService } from '../http-servc.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})

export class CrudComponent implements OnInit {
  private baseUrl = 'http://localhost:3000/api'; // Reemplaza con la URL de tu servidor Node.js
  usuarios$: Observable<any[]> = new Observable<any[]>(); // Inicialización


  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsuarios().subscribe(usuarios => { // Llama al método de tu servicio aquí
      console.log(usuarios);
    });
   }
 }

