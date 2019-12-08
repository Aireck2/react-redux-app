import { createStore } from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: 'Ragnar',
            foto: 'https://i.pinimg.com/originals/45/46/5a/45465a4a12c92bf811cd939c8aef72c3.jpg'
        },
        {
            id: 2,
            nombre: 'Floki',
            foto: 'https://noticierouniversal.com/wp-content/uploads/2019/02/floki-1.jpg'
        },
        {
            id: 3,
            nombre: 'Harald',
            foto: 'https://i.pinimg.com/originals/70/dd/22/70dd221e1f1ebee8dc6b0cead2833c7e.jpg'
        },
        {
            id: 4,
            nombre: 'Lagertha',
            foto: 'https://i.ytimg.com/vi/VCQWyB1ssQg/maxresdefault.jpg'
        },
        {
            id: 5,
            nombre: 'Ivar',
            foto: 'https://fmjovenplottier.com.ar/wp-content/uploads/2019/02/b2a1bfabb912f9b28b05797b2fee694e.jpg'
        },
        {
            id: 6,
            nombre: 'Bjorn',
            foto: 'https://i.pinimg.com/originals/81/94/05/81940550233e822aa91175b6f69fdd84.jpg'
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)