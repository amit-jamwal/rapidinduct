import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.scss']
})
export class EditTrainingComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  public trainingList: any = [];
  public url = this.commonService.apiUrl;
  ngOnInit() {
    this.getTrainingList();
  }

  getTrainingList() {
    // this.commonService.getAllEmployees.subscribe()
    this.commonService.getTrainingList().subscribe(result => {
      this.trainingList = result.data;
    });
  }

  // downlaod(fileName: any) {
  //   this.commonService.downloadTraining(fileName).subscribe(data => {
  //     console.log(data);
  //     const blob = new Blob([data.b]);
  //     const url = window.URL.createObjectURL(blob);
  //     var a = document.createElement('a');
  //     document.body.appendChild(a);
  //     a.setAttribute('style', 'display: none');
  //     a.href = url;
  //     a.download = fileName;
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     a.remove();
  //   });
  //   // window.open(this.commonService.apiUrl + 'doc/download');
  // }

  downloadTraining(name) {
    let filename = name;
    this.commonService.downloadTraining(filename).subscribe(
      data => {
        // saveAs(data, filename);
        console.log(data);
        // console.log(data[0].Int8Array);

        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      },
      err => {
        alert('Problem while downloading the file.');
        console.error(err);
      }
    );
  }
}
