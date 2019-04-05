import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/doc/edit';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public trainingForm: FormGroup;
  public submitted = false;

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/doc/edit', itemAlias: 'photo' });
  @ViewChild('uploadFile') uploadElRef: ElementRef;

  //FUNCTION TO GET FORM FIELDS VALUES...
  get formField() {
    return this.trainingForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.trainingForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      passingCriteria: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.uploader.onBuildItemForm = (item, form) => {
      for (var key in this.trainingForm.controls) {
        form.append(key, this.trainingForm.controls[key].value);
      }
      console.log('hhh', this.trainingForm.controls);
    };
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      this.uploadElRef.nativeElement.value = null;
      this.trainingForm.reset();
    };

    this.uploader.uploadAll();
  }
}
