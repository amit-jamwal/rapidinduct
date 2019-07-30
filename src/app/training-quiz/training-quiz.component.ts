import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-training-quiz',
  templateUrl: './training-quiz.component.html',
  styleUrls: ['./training-quiz.component.scss']
})
export class TrainingQuizComponent implements OnInit {
  public trainingQuizForm: FormGroup;
  public trainingList: any = [];
  public submitted = false;
  constructor(private formBuilder: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    this.getTrainingList();

    this.trainingQuizForm = this.formBuilder.group({
      training: new FormControl(null, Validators.required),
      // trainingId: new FormControl('', Validators.required),
      question: new FormControl('', Validators.required),
      option1: new FormControl('', Validators.required),
      option2: new FormControl('', Validators.required),
      option3: new FormControl('', Validators.required),
      option4: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required)
    });
  }
  // FUNCTION TO GET FORM FIELDS VALUES...
  get formField() {
    return this.trainingQuizForm.controls;
  }

  getTrainingList() {
    // this.commonService.getAllEmployees.subscribe()
    this.commonService.getTrainingList().subscribe(result => {
      this.trainingList = result.data;
    });
  }
  addTrainingQuestion() {
    this.submitted = true;
    // STOP USER IF LOGIN FORM IS INVALID...
    if (this.trainingQuizForm.invalid) {
      // console.log('Trianing is required', this.formField.training);
      // let a = document.getElementsByClassName('ng-select-container');
      // console.log(a);
      return;
    }

    const data = {
      trainingId: this.formField.training.value,
      question: this.formField.question.value,
      option1: this.formField.option1.value,
      option2: this.formField.option2.value,
      option3: this.formField.option3.value,
      option4: this.formField.option4.value,
      answer: this.formField.answer.value
    };
    console.log(data);
    this.commonService.saveTrainingQuiz(data).subscribe(
      result => {
        console.log('success', result);
      },
      error => {
        console.error(error);
      }
    );
  }

  updateValue(event) {
    // console.log(event, i);
    if (event) { this.trainingQuizForm.controls.training.setValue(event._id); }
  }
}
