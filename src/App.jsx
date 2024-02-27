import React from 'react';
import Navbar from './componentes/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
      <Navbar />
      <h1>forjad20</h1>
      <ItemListContainer greeting="bienvenidos" />
    </>
  );
}

export default App;
