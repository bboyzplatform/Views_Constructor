import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { TreeNode } from 'primeng/api';

@Injectable()
export class FilesApiService {

  constructor(private http: Http) { }

  getFiles() {
    return this.http.get('../assets/fakeData/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.json().data);
  }

}
