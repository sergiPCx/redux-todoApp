import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { toggleTodoAction, editarTodoAction, borrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @ViewChild('txtInputFisico',{ read: true, static: false }) txtInputFisico:ElementRef;
  @Input() todo: Todo;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completado);
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    //Cambio del check
    this.chkField.valueChanges.subscribe( () => {
      this.store.dispatch(toggleTodoAction({id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    },1);
  }

  terminarEdicion(){
    this.editando = false;

    if( this.txtInput.valid){
      if( this.todo.texto !== this.txtInput.value){
        this.store.dispatch(editarTodoAction({id: this.todo.id, texto: this.txtInput.value}));
      }
    }
  }

  borrarTodo(){
    console.log('borrar')
    this.store.dispatch(borrarTodoAction({id: this.todo.id}));
  }
}
