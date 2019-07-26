import { createReducer, on, props } from '@ngrx/store';
import *as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Hacer la cama');
const estadoInicial: Todo[] = [todo1, todo2, todo3];
todo1.completado = true;

/* TODO multiline example
**  second line
**  third line
*/

export const todoReducer = createReducer(estadoInicial, 
    on(fromTodo.agregarTodoAction, (state, props) => {
        const todo = new Todo(props.texto);
        return [...state, todo];
    }),
    on(fromTodo.toggleTodoAction, (state, props) =>{
        return state.map( todoEdit =>{
            if ( todoEdit.id === props.id){
                return {
                    ...todoEdit,
                    completado: !todoEdit.completado
                } 
            } else {
                return todoEdit;
            }
        })
    }),
    on(fromTodo.editarTodoAction, (state, props) =>{ 
        return state.map( todoEdit =>{
            if ( todoEdit.id === props.id){
                return {
                    ...todoEdit,
                    texto: props.texto
                } 
            } else {
                return todoEdit;
            }
        })
    }),
    on(fromTodo.borrarTodoAction, (state, props) => {
        return state.filter( todoEdit => todoEdit.id !== props.id );
    }),
    on(fromTodo.toggleAllTodoAction, (state, props) => {
        return state.map( todoEdit => {
            return{
                ...todoEdit,
                completado: props.completado
            }
        });
    }),
    on(fromTodo.toggleAllTodoAction, (state, props) => {
        return state.map( todoEdit => {
            return{
                ...todoEdit,
                completado: props.completado
            }
        });
    }),
    on(fromTodo.borrarCompletadoTodoAction, (state) => {
        return state.filter( todoEdit => !todoEdit.completado );
    }),
    );
