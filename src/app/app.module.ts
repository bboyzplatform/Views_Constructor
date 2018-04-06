
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import HttpClientModule from @angular/common/http
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { BsStepperComponent } from './components/bsstepper/bsstepper.component';
import {
  MatStepperModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule, MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';

import { AppStartPageComponent } from './components/app-start-page/app-start-page.component';
import { LayoutsViewListComponent } from './components/layouts-view-list/layouts-view-list.component';
import { AllComponentsPageComponent } from './components/all-components-page/all-components-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule  } from '@angular/router';
import {TreeModule} from 'primeng/tree';
import { TreeNode, TreeDragDropService  } from 'primeng/api';
import { OrderListModule } from 'primeng/primeng';
import { PanelMenu, MenuItem, ContextMenuModule } from 'primeng/primeng';
const routes = [
  {path: '', component: LayoutsViewListComponent},
  { path: 'preview-all-components', component: AllComponentsPageComponent },
  { path: 'create-layout', component: BsStepperComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'widgets', component: AllComponentsPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BsStepperComponent,
    AppStartPageComponent,
    LayoutsViewListComponent,
    AllComponentsPageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatStepperModule,
    MatMenuModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    MatInputModule,
    MatFormFieldModule, MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    RouterModule.forRoot(routes),
    OrderListModule,
    TreeModule,
    ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
