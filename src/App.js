import React, { Component } from 'react';
import BreedList from './components/BreedList';
import NavMenu from './components/NavMenu';
import { Provider } from 'react-redux';
import store from './store/store';
import { 
    BrowserRouter as Router, 
    Route, 
    Redirect,
    Switch
} from 'react-router-dom';
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
            <Router>
                <React.Fragment>
                    <NavMenu/>
                    <Container>
                        <Switch>
                            <Redirect exact from="/" to={{pathname: '/breeds', search: '?page=1&item_count=20'}}/>
                            <Route path="/breeds" component={BreedList}/>
                        </Switch>
                    </Container>
                </React.Fragment>
            </Router>
        </Provider>
    );
  }
}

export default App;
