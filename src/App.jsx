import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <ItemListContainer greeting="bienvenidos" />} />
        <Route exact path="/category/:id" render={({ match }) => <ItemListContainer categoryId={match.params.id} />} />
        <Route exact path="/item/:id" render={({ match }) => <ItemDetailContainer itemId={match.params.id} />} />
      </Switch>
    </Router>
  );
}

export default App;
