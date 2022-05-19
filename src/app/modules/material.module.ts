import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
  ],
  providers:[
    {
    provide: MatDialogRef,
    useValue: {}
    },
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class MaterialModule { }
