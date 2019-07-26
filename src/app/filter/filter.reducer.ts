import { createReducer, on } from '@ngrx/store';
import *as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filstroValidos = 'todos';

export const filtroReducer = createReducer(estadoInicial, 
    on( fromFiltro.setFiltroAction, (state, props) =>{
        return props.filtro;
    })
    );