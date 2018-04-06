import { FilesApiService } from './files-api.service';
import { FakeApiService } from './fake-api.service';
import { Component } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FakeApiService, FilesApiService]
})
export class AppComponent {
  title = 'BS layout builder';
  debugConsole = '';
  constructor() {

  }
  ngOnInit() {}
}
