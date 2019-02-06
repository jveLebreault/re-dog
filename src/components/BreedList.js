import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import BreedInfo from './BreedInfo';
import Paginator from './Paginator';
import { 
    navigateToPage
} from '../store/actions/actions';


const mapStateToProps = (state, {location}) => {
    const params = new URLSearchParams(location.search);

    const currentPage = Number(params.get('page')) ? Number(params.get('page')) : 1;
    const pageSize = Number(params.get('page_size')) ? Number(params.get('page_size')) : 20;

    return {
        breedList: state.breedList,
        isRequestPending: state.isRequestPending,
        currentPage,
        pageSize
    }
}


const mapDispatchToProps = dispatch => {
    return {
        navigateToPage: (toPage, pageSize) => dispatch(navigateToPage(toPage, pageSize)),
    }
}


class BreedList extends React.Component {

    componentDidUpdate({location}) {
        const {currentPage, pageSize} = this.props;

        if (location != this.props.location) {
            this.props.navigateToPage(currentPage -1, pageSize);
        }
    }

    getCurrentSlice() {
        const { currentPage, pageSize } = this.props
        return this.props.breedList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }


    render() {
        return (
            <React.Fragment>
                <Row>
                    {this.getCurrentSlice().map(breed => 
                        (
                            <Col key={breed.id} xs="6" md="4" lg="3">
                                <BreedInfo breedInfo={breed}/>
                            </Col>
                        )
                    )}
                </Row>

                <Row>
                    <Col xs={{size: 5, offset: 5}}>
                        <Paginator 
                            currentPage={this.props.currentPage} 
                            pageSize={this.props.pageSize} 
                            itemCount={this.props.breedList.length}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);