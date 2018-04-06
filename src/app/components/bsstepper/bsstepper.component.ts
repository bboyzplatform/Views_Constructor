
import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { FakeApiService } from './../../fake-api.service';
import { FilesApiService } from '../../files-api.service';
@Component({
  selector: 'app-bs-stepper',
  templateUrl: './bsstepper.component.html',
  styleUrls: [
    './bsstepper.component.css'
  ]
})
export class BsStepperComponent {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  sources = [
    {
      value: 't_registers', viewValue: 't_registers', uniquerIdentifier: 'd3ee3ed6-ebb7-4f07-bd78-34ae13cafd49'
    },
    {
      value: 't_something', viewValue: 't_something',
      uniquerIdentifier: 'd3ee3ed6-ebb7-4f07-bd78-34ae13cafd49'
    }
  ];

  @Input() layoutName;

  constructor(
    private _formBuilder: FormBuilder,
    private fakeApiService: FakeApiService,
    private filesApiService: FilesApiService
  ) { }

  itemsArr = [];
  files: TreeNode[];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    /*this.sourceItems = this.fakeApiService.sources;*/
    this.fakeApiService.getSources().subscribe(items => {
      this.itemsArr = items;
      console.log(this.itemsArr);
    });
    this.filesApiService.getFiles().then(files => this.files = files);
  }
}
