import {createAction, props} from '@ngrx/store';

export const agregarTodoAction = createAction( '[TODO] Agregar todo', props<{texto:string}>());
export const toggleTodoAction = createAction( '[TODO] Toggle todo', props<{id:number}>());
export const editarTodoAction = createAction( '[TODO] Editar todo', props<{id:number, texto:string}>());
export const borrarTodoAction = createAction( '[TODO] Borrar todo', props<{id:number}>());
export const toggleAllTodoAction = createAction( '[TODO] ToggleAll todo', props<{completado: boolean}>());
export const borrarCompletadoTodoAction = createAction( '[TODO] borrarCompletadoAll todo');