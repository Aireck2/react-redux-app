import React from 'react';
import { connect } from 'react-redux';


const Suplentes = ({ suplentes, quitarSuplente }) => (
    <div className="suplentes-container">
        <h2>Suplentes</h2>
        <div className="suplentes">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div className="suplente-box ">
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => quitarSuplente(j)}>x</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </div>
)
const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)