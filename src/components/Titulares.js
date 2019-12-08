import React from 'react';
import { connect } from 'react-redux';


const Titulares = ({ titulares, quitarTitular }) => (
    <div className="titulares-container">
        <h2>Titulares</h2>
        <div className="titulares">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div className="titular-box">
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => quitarTitular(j)}>x</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </div>
)
const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)