import React, { Component } from 'react';
import BreedList from './components/BreedList';
import NavMenu from './components/NavMenu';
import BreedDetails from './components/BreedDetails';
import { connect } from 'react-redux';
import { 
    fetchBreeds,
    navigateToPage
} from './store/actions/actions';
import { 
    Route, 
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faSearch, 
    faAngleDoubleLeft, 
    faAngleDoubleRight, 
    faAngleRight, 
    faAngleLeft,
    faFileAlt,
    faEye
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'typeface-roboto';

library.add(faSearch, faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faAngleLeft, faFileAlt, faEye);

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBreeds: () => dispatch(fetchBreeds()),
        navigateToPage: (toPage, pageSize) => dispatch(navigateToPage(toPage, pageSize)),
    }
}

class App extends Component {

    componentDidMount() {
        
        this.props.fetchBreeds().then(() => {
            const {location} = this.props;

            if (location.pathname == "/" || location.pathname == "/breeds") {
                const params = new URLSearchParams(location.search);
    
                const currentPage = Number(params.get('page')) ? Number(params.get('page')) : 1;
                const pageSize = Number(params.get('page_size')) ? Number(params.get('page_size')) : 20;
    
                this.props.navigateToPage(currentPage -1, pageSize);
            }
        });
    }

    render() {
        return (
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
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
