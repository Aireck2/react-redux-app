import React from 'react';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import { Provider } from 'react-redux';
import store from './store';




function App() {
  return (
    <Provider store={store}>
      <>
        <h1>Manager</h1>
        <Jugadores />
        <EquipoSeleccionado />

      </>
    </Provider>
  );
}

export default App;
