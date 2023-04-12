import { Component } from '@angular/core';
import { Variable } from '../variable';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  
  variable: Variable[] = [
    {nombre: "jajaj", numero: 123, estado: false},
    {nombre: "2wdaf", numero: 4225, estado: true},
    {nombre: "gsawr", numero: 5742, estado: true}
  ];


}
