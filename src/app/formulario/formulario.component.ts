import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  open_alert: boolean = false;

  show_in_console(name: string) :void {
    this.open_alert = true;
    console.log(name);
  }
}
