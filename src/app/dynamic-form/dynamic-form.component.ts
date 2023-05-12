import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicService } from '../dynamic.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  myForm!: FormGroup
  formData: any[] = []
  constructor(private service: DynamicService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.getDataFromApi()
    .subscribe((res: any) => {
        this.formData = res.keys
        console.log(this.formData);
      })

      this.initializeForm();
    }

  initializeForm() {
    this.myForm = this._fb.group({
      client_id: ['', [Validators.required]],
      device: ['', [Validators.required]],
      device_id: ['', [Validators.required]],
      app_version: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      brand_id: ['', [Validators.required]],
    })
  }

  data: any
  submitted:boolean=false
  submitForm() {
    this.data = this.myForm.value
    console.log(this.myForm.value)
    this.submitted = true
  }
}
