import { DragDropModule } from '@angular/cdk/drag-drop';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { SharedModule } from '../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpringProfileComponent } from './spring-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SpringProfileComponent
  }
];

@NgModule({
  declarations: [SpringProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    SharedModule,
    CodemirrorModule,
    DragDropModule,
    MatCheckboxModule,
    AutocompleteLibModule,
    MatSidenavModule
  ],
  exports: [SpringProfileComponent]
})
export class SpringProfileModule { }
