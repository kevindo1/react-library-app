import BookList from './views/Books/BookList';
import './App.css';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>

      <BrowserRouter>
        <header>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
        </header>

        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id"></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
