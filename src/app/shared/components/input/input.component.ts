import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  faTimes = faTimes;
  public formGroup = new FormGroup({
    formControl: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  public clearControl(): void {
    this.formGroup.get('formControl')?.setValue('');
  }
}
