import React from 'react';
import Header from './components/Header';
import Formulario from "./components/Formulario";
import ListEvents from "./components/ListEvents";
import CategoriasProvider from "./contex/categoriasContex";
import EventosProvider from "./contex/eventosContex";


function App() {
  return (
      <EventosProvider>
          <CategoriasProvider>
            <Header />
            <div className="uk-container">
                <Formulario/>
                <ListEvents>

                </ListEvents>
            </div>
          </CategoriasProvider>
      </EventosProvider>
  );
}

export default App;
