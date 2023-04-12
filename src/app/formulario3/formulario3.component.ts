import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  constructor(private fobu: FormBuilder){

  }

  formUser = this.fobu.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]]
  });

  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required, Validators.email])
  // });

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }
  
  process(){
    console.log(this.formUser.value);
  }

  // name = new FormControl('', Validators.required);
  // email = new FormControl('', [Validators.required, Validators.email]);

}
