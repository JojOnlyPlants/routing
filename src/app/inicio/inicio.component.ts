import { Component } from '@angular/core';
import { HttpService } from '../http-servc.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  conexionExitosa: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.chkConexion().subscribe(
      conexionExitosa => this.conexionExitosa = conexionExitosa
    );
  }
}
