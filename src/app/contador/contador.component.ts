import { Component, OnInit } from '@angular/core';
import { Variable } from '../variable';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  
  constructor() {}

  ngOnInit(): void {
  }

  numero: number = 1;

  decrementar() {
    this.numero-= 1;
  }

  incrementar() {
    this.numero-= -1;
  }

  // variable: Variable = {
  //   nombre: 'helou mundo',
  //   numero: 223,
  //   estado: false
  // }

}
