import { createAction, props } from '@ngrx/store';

export type filstroValidos = 'todos' | 'completados'| 'pendientes'

export const setFiltroAction = createAction( '[Filter] set filro', props<{filtro:filstroValidos}>());