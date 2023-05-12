import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicService } from '../dynamic.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  myForm!:FormGroup
  formData: any[] = []
  constructor(private service: DynamicService, private _fb: FormBuilder) { 
    

  }

  ngOnInit(): void {
    
    this.service.postDataFromApi()
    .subscribe((res: any) => {
      this.formData = res?.data
      console.log(res)
    })
    this.myForm =  this.toFormGroup()
  }
  
  // get isValid() { return this.myForm.controls['table_column'].valid; }
  toFormGroup() {
    const group: any = {};

    this.formData.forEach(item => {
      group[item.table_column] = item.is_mandatory ? new FormControl(item.value || '', Validators.required)
                                              : new FormControl(item.value || '');
    });
    return new FormGroup(group);
  }



  data: any
  submitted: boolean = false
  submitForm() {
    this.submitted = true
  }
}
