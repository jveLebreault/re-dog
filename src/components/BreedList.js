import React from 'react';
import BreedInfo from './BreedInfo';
import Paginator from './Paginator';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { 
    fetchBreedList,                                            
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
        fetchBreeds: (currentPage = 0, pageSize = 20) => dispatch(fetchBreedList(currentPage, pageSize)),
        navigateToPage: (toPage, pageSize) => dispatch(navigateToPage(toPage, pageSize)),
    }
}


class BreedList extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.fetchBreeds(currentPage - 1, pageSize);

        if(!this.props.location.search) {
            this.props.history.replace({
                pathname: this.props.location.pathname,
                search: `?page=${currentPage}&page_size=${pageSize}`
            });
        }
    }

    componentDidUpdate({location}) {
        if (location != this.props.location) {
            const {currentPage, pageSize} = this.props;
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
                            <Col key={breed.id} xs="3">
                                <BreedInfo breedInfo={breed}/>
                            </Col>
                        )
                    )}
                </Row>

                <Row>
                    <Col xs={{size: 5, offset: 5}}>
                        <Paginator currentPage={this.props.currentPage} pageSize={this.props.pageSize} itemCount={this.props.breedList.length}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);