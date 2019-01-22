import React, { Component } from 'react';
import { FormClose, Notification } from 'grommet-icons';
import BreedList from './components/BreedList';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import 'typeface-roboto';
import { 
  Box, 
  Button, 
  Heading, 
  Grommet,
  ResponsiveContext 
} from 'grommet';

const theme = {
  global : {
    colors: {
      brand: '#228BE6'
    },
    font : {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
}

const AppBar = (props) => (
  <Box 
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{left: 'medium', right: 'small', vertical: 'small'}}
    elevation='medium'
    style={{zIndex: '1'}}
    {...props}
  />
);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showSideBar: false
    };
  }

  render() {
    const {showSideBar} = this.state;

    return (
      <Provider store={store}>
        <Grommet theme={theme} full>
          <ResponsiveContext.Consumer>
            {size => (
              <Box fill>
                <AppBar>
                  <Heading level='3' margin='none'>Re-dog</Heading>
                </AppBar>
                <BreedList />
              </Box>            
            )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </Provider>
    );
  }
}

export default App;
