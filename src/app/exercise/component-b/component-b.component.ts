import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private formService: FormService) { }

  ngOnInit() {
    this.form.valueChanges.subscribe((val) => {
      this.formService.addNewRadio(val.options);
    });
  }

  // Actually main form-group with 1 control -> 'options' which is form-array
  form = this.formBuilder.group({
    options: this.formBuilder.array([])
  });

  get options() {
    return this.form.controls['options'] as FormArray;
  };

  // optionForm=Control, grouping our inputs into controls & pushing it into form-array
  onAddLesson() {
    const optionForm = this.formBuilder.group({
      name: ['', Validators.required],
      value: ['', Validators.required]
    });
    this.options.push(optionForm);
  };

  onDeleteLesson(optionIndex: number) {
    this.options.removeAt(optionIndex);
  };
}
