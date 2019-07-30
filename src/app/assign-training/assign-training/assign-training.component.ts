import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-assign-training',
  templateUrl: './assign-training.component.html',
  styleUrls: ['./assign-training.component.scss']
})
export class AssignTrainingComponent implements OnInit {
  public assignedTrainings = null;
  public settings: any;
  public data: LocalDataSource | Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.configureGrid();
  }

  /**
  * Binding Grid
  */
  private configureGrid(): void {
    this.settings = {
      hideSubHeader: true,
      pager: {
        display: false,
      },
      reset: true,
      mode: 'external',
      delete: {
        confirmDelete: true
      },
      columns: {
        attributeValue: {
          title: 'training',
          editable: false,
          sortDirection: 'asc',
          width: '79%'
        },
        relValue: {
          title: 'training2',
          editable: false,
          sortDirection: 'asc',
          width: '79%'
        }

      },
      actions: {
        add: false,
        position: 'right',
        edit: false,
        delete: false,
        columnTitle: ''
      },
    };
  }

}
