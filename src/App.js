import React, { Component } from 'react';
import BreedList from './components/BreedList';
import NavMenu from './components/NavMenu';
import { Provider } from 'react-redux';
import store from './store/store';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'typeface-roboto';

library.add(faSearch);

class App extends Component {

  render() {

    return (
        <Provider store={store}>
            <NavMenu/>
            <Container>
                <BreedList/>
            </Container>
        </Provider>
    );
  }
}

export default App;
