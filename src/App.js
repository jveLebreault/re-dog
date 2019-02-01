import React, { Component } from 'react';
import BreedList from './components/BreedList';
import NavMenu from './components/NavMenu';
import BreedDetails from './components/BreedDetails';
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
import { 
    faSearch, 
    faAngleDoubleLeft, 
    faAngleDoubleRight, 
    faAngleRight, 
    faAngleLeft 
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'typeface-roboto';

library.add(faSearch, faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faAngleLeft);

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Router>
                <React.Fragment>
                    <NavMenu/>
                    <Container>
                        <Switch>
                            <Redirect exact from="/" to={{pathname: '/breeds', search: '?page=1&page_size=20'}}/>
                            <Route path="/breeds" component={BreedList}/>
                            <Route path="/breed/:breedId" component={BreedDetails}/>
                        </Switch>
                    </Container>
                </React.Fragment>
            </Router>
        </Provider>
    );
  }
}

export default App;
