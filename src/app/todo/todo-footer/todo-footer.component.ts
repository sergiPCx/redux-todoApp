import { Component, OnInit } from '@angular/core';
import *as fromFiltro from '../../filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { setFiltroAction } from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';
import { borrarCompletadoTodoAction } from '../todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filstroValidos: fromFiltro.filstroValidos[] = ['todos','completados','pendientes'];
  filtroActual: fromFiltro.filstroValidos;
  pendientes: number;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state =>{
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filstroValidos){
    this.store.dispatch(setFiltroAction({filtro: nuevoFiltro}));
  }

  contarPendientes(todos: Todo[]){
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  limpiarCompletado(){
    this.store.dispatch(borrarCompletadoTodoAction());
  }


}
