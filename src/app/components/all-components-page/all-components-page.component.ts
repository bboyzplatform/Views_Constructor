import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import {MenuItem} from 'primeng/primeng';
import { FilesApiService } from '../../files-api.service';

@Component({
  selector: 'app-all-components-page',
  templateUrl: './all-components-page.component.html',
  styleUrls: ['./all-components-page.component.css']
})
export class AllComponentsPageComponent implements OnInit {
  expandingTree: Tree;
  filesTree: TreeNode[];
  selectedFiles: TreeNode[];
  items: MenuItem[];
  loading: boolean;

  constructor(private filesApiService: FilesApiService) { }


  ngOnInit() {
    this.loading = true;

    this.filesApiService.getFiles().then(files => this.filesTree = files);

    this.items = [

      { label: 'Unselect', icon: 'fa-close', command: (event) => this.unselectFile() }
    ];
  }

  /* nodeExpand(event) {
    if (event.node) {
      //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.filesApiService.getLazyFiles().then(nodes => event.node.children = nodes);
    }
  } */

  unselectFile() {
    this.selectedFiles = null;
  }

  expandAll() {
    this.filesTree.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.filesTree.forEach(node => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
