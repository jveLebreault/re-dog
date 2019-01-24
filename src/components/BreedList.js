import React from 'react';
import BreedInfo from './BreedInfo';
import Paginator from './Paginator';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { 
    fetchBreedList, 
    changeCurrentPage,
    changeItemCount
} from '../store/actions/actions';

const mapStateToProps = (state, {location}) => {
    return {
        breedList: state.breedList,
        isRequestPending: state.isRequestPending,
        itemCount: state.itemCount,
        currentPage: state.currentPage,
        location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBreeds: () => dispatch(fetchBreedList()),
        changePage: (toPage) => dispatch(changeCurrentPage(toPage)),
        changeItemCount: (itemCount) => dispatch(changeItemCount(itemCount))
    }
}


class BreedList extends React.Component {

    componentDidMount() {
        this.props.fetchBreeds();
    }

    getCurrentSlice() {
        const { currentPage, itemCount } = this.props
        return this.props.breedList.slice(currentPage * itemCount, (currentPage + 1) * itemCount);
    }


    render() {
        console.log('THESE PROPS', this.props.location);
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
                        <Paginator pageSize={this.props.itemCount}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);