import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Pelicula } from '../dialog/pelicula.interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  peliculasForm: FormGroup;
  constructor(private fb:FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.peliculasForm=this.fb.group({
      titulo:['', Validators.required],
      year:[''],
      director:[''],
      liked:['']
    })
  }

  onSubmit(){
    console.log(this.peliculasForm.value);
    this.dialog.open(DialogComponent,{
      data:{
        titulo: this.peliculasForm.get('titulo')?.value,
        year:this.peliculasForm.get('year')?.value,
        director:this.peliculasForm.get('director')?.value,
        liked: this.peliculasForm.get('liked')?.value
      }
    })
  }
}
