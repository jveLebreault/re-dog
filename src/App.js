import React, { Component } from 'react';
import BreedList from './components/BreedList';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import 'typeface-roboto';
import { 
    App as MainContainer, 
    TopRegion, 
    MainRegion, 
    BottomRegion,
    Container,
    Content
} from 'reactackle';


class App extends Component {

  render() {

    return (
        <Provider store={store}>
            <MainContainer>
                <TopRegion>
                    Top Region
                </TopRegion>

                <MainRegion>
                    <Content>
                        <Container boxed>
                            <BreedList/>
                        </Container>
                    </Content>
                </MainRegion>

                <BottomRegion>
                    Bottom Region
                </BottomRegion>
            </MainContainer>
        </Provider>
    );
  }
}

export default App;
